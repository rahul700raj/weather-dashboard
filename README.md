# 🌤️ Weather Dashboard

An intermediate-level weather dashboard application that displays real-time weather data using the OpenWeatherMap API. This project demonstrates API integration skills, responsive design, and modern JavaScript practices.

![Weather Dashboard](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: View weather predictions for the next 5 days
- **Hourly Forecast**: Check weather conditions for the next 24 hours
- **Geolocation Support**: Automatically detect and display weather for your current location
- **Detailed Weather Metrics**: 
  - Temperature (actual and feels like)
  - Humidity levels
  - Wind speed
  - Atmospheric pressure
  - Visibility
  - Weather description with icons
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Error Handling**: User-friendly error messages for invalid inputs or API failures

## 🚀 Demo

[Live Demo](https://rahul700raj.github.io/weather-dashboard/) *(Enable GitHub Pages to activate)*

## 📸 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x400/667eea/ffffff?text=Weather+Dashboard+Desktop)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800/764ba2/ffffff?text=Weather+Dashboard+Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: Async/await, fetch API, DOM manipulation
- **OpenWeatherMap API**: Real-time weather data
- **Font Awesome**: Icon library
- **Geolocation API**: Browser location detection

## 📋 Prerequisites

Before you begin, ensure you have:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free tier available)
- Basic understanding of HTML, CSS, and JavaScript

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rahul700raj/weather-dashboard.git
cd weather-dashboard
```

### 2. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy your API key

### 3. Configure the API Key

Open `script.js` and replace the placeholder with your actual API key:

```javascript
const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your actual API key
```

### 4. Run the Application

Simply open `index.html` in your web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 📖 Usage

### Search by City Name
1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather and forecasts

### Use Current Location
1. Click the "Use My Location" button
2. Allow location access when prompted
3. Weather data for your location will be displayed

### Navigate Forecasts
- Scroll through the hourly forecast horizontally
- View 5-day forecast cards with daily summaries
- Hover over cards for interactive effects

## 🏗️ Project Structure

```
weather-dashboard/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript logic and API calls
└── README.md          # Project documentation
```

## 🎨 Customization

### Change Color Scheme

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #357abd;
    --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify Default City

Change the default city in `script.js`:

```javascript
window.addEventListener('load', () => {
    getWeatherByCity('YourCity'); // Replace 'London' with your preferred city
});
```

## 🔑 API Endpoints Used

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

## 🐛 Troubleshooting

### API Key Issues
- Ensure your API key is valid and active
- Check if you've exceeded the free tier limits (60 calls/minute)
- Wait a few hours after generating a new API key for activation

### Location Not Working
- Check if location services are enabled in your browser
- Ensure you're using HTTPS (required for geolocation)
- Try using a different browser

### Weather Data Not Loading
- Check your internet connection
- Verify the city name is spelled correctly
- Open browser console (F12) to check for errors

## 📚 Learning Outcomes

This project helps you learn:
- ✅ Working with third-party APIs
- ✅ Handling asynchronous JavaScript (async/await)
- ✅ DOM manipulation and event handling
- ✅ Responsive web design principles
- ✅ Error handling and user feedback
- ✅ Browser APIs (Geolocation)
- ✅ CSS animations and transitions
- ✅ Git version control

## 🚀 Future Enhancements

- [ ] Add weather alerts and warnings
- [ ] Implement weather maps integration
- [ ] Add multiple city comparison
- [ ] Save favorite locations (localStorage)
- [ ] Add dark/light theme toggle
- [ ] Include air quality index
- [ ] Add weather charts and graphs
- [ ] Implement unit conversion (Celsius/Fahrenheit)
- [ ] Add weather-based background changes
- [ ] Include sunrise/sunset times

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rahul Mishra**
- GitHub: [@rahul700raj](https://github.com/rahul700raj)
- Email: rm2778643@gmail.com

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Inspiration from various weather applications

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email: rm2778643@gmail.com

---

⭐ If you found this project helpful, please give it a star!

**Happy Coding! 🌈**