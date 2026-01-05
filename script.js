// API Configuration
const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const weatherContent = document.getElementById('weatherContent');

// Current Weather Elements
const cityName = document.getElementById('cityName');
const currentDate = document.getElementById('currentDate');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const uvIndex = document.getElementById('uvIndex');

// Forecast Elements
const forecastContainer = document.getElementById('forecastContainer');
const hourlyContainer = document.getElementById('hourlyContainer');

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    } else {
        showError('Please enter a city name');
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

locationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByCoords(latitude, longitude);
            },
            (error) => {
                hideLoading();
                showError('Unable to get your location. Please enable location services.');
            }
        );
    } else {
        showError('Geolocation is not supported by your browser');
    }
});

// Fetch Weather by City Name
async function getWeatherByCity(city) {
    showLoading();
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        const { lat, lon } = data.coord;
        
        await Promise.all([
            displayCurrentWeather(data),
            getForecast(lat, lon),
            getHourlyForecast(lat, lon)
        ]);
        
        hideLoading();
        showWeatherContent();
    } catch (error) {
        hideLoading();
        showError(error.message || 'Failed to fetch weather data');
    }
}

// Fetch Weather by Coordinates
async function getWeatherByCoords(lat, lon) {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }
        
        const data = await response.json();
        
        await Promise.all([
            displayCurrentWeather(data),
            getForecast(lat, lon),
            getHourlyForecast(lat, lon)
        ]);
        
        hideLoading();
        showWeatherContent();
    } catch (error) {
        hideLoading();
        showError(error.message || 'Failed to fetch weather data');
    }
}

// Display Current Weather
function displayCurrentWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    currentDate.textContent = formatDate(new Date());
    
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    weatherIcon.alt = data.weather[0].description;
    
    temperature.textContent = Math.round(data.main.temp);
    weatherDescription.textContent = data.weather[0].description;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;
    visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    
    // UV Index would require additional API call (One Call API)
    uvIndex.textContent = 'N/A';
}

// Get 5-Day Forecast
async function getForecast(lat, lon) {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Unable to fetch forecast data');
        }
        
        const data = await response.json();
        displayForecast(data.list);
    } catch (error) {
        console.error('Forecast error:', error);
    }
}

// Display 5-Day Forecast
function displayForecast(forecastList) {
    forecastContainer.innerHTML = '';
    
    // Get one forecast per day (around noon)
    const dailyForecasts = forecastList.filter(item => 
        item.dt_txt.includes('12:00:00')
    ).slice(0, 5);
    
    dailyForecasts.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        forecastCard.innerHTML = `
            <div class="day">${dayName}</div>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" 
                 alt="${day.weather[0].description}">
            <div class="temp">${Math.round(day.main.temp)}°C</div>
            <div class="description">${day.weather[0].description}</div>
        `;
        
        forecastContainer.appendChild(forecastCard);
    });
}

// Get Hourly Forecast
async function getHourlyForecast(lat, lon) {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Unable to fetch hourly forecast');
        }
        
        const data = await response.json();
        displayHourlyForecast(data.list.slice(0, 8)); // Next 24 hours (8 x 3-hour intervals)
    } catch (error) {
        console.error('Hourly forecast error:', error);
    }
}

// Display Hourly Forecast
function displayHourlyForecast(hourlyList) {
    hourlyContainer.innerHTML = '';
    
    hourlyList.forEach(hour => {
        const hourlyCard = document.createElement('div');
        hourlyCard.className = 'hourly-card';
        
        const date = new Date(hour.dt * 1000);
        const time = date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            hour12: true 
        });
        
        hourlyCard.innerHTML = `
            <div class="time">${time}</div>
            <img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" 
                 alt="${hour.weather[0].description}">
            <div class="temp">${Math.round(hour.main.temp)}°C</div>
        `;
        
        hourlyContainer.appendChild(hourlyCard);
    });
}

// Utility Functions
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function showLoading() {
    loadingSpinner.classList.add('show');
    weatherContent.classList.remove('show');
    errorMessage.classList.remove('show');
}

function hideLoading() {
    loadingSpinner.classList.remove('show');
}

function showWeatherContent() {
    weatherContent.classList.add('show');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    weatherContent.classList.remove('show');
    
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

// Initialize with default city on page load
window.addEventListener('load', () => {
    getWeatherByCity('London');
});