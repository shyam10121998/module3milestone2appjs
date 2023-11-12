function fetchWeatherData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9de01d4b0ea968502645df907e0a0f48`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Displaying the retrieved weather data in the console
        // Process the weather data here (display on a webpage, manipulate, etc.)
      })
      .catch(error => console.error('Error fetching weather:', error));
  }
  
  // Call the function to fetch the weather data for a specific location
  //fetchWeatherData('rajkot');