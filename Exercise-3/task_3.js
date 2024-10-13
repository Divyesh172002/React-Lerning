// Create a small weather forecast simulation using asynchronous JavaScript. You'll implement the solution using Promises and Async/Await to fetch mock weather data for a city.
// Requirements:
// 1. Fetch Weather Data:
//     Write a function fetchWeather(city) that returns a promise resolving mock weather data for a city. 
//     The function should simulate a 2-second delay using setTimeout and return an object like { city: city, temperature: 25, condition: "Cloudy" }.
// 2. Display Weather:
//     Create another function getWeather(city) that uses async/await to call fetchWeather(city), then logs the weather data to the console in the format:
//     Weather in [city]: [temperature]°C, [condition].
// 3. Error Handling:
//     If the city is not provided or is an empty string, the fetchWeather() promise should reject with the error message "City not provided".
//     Ensure the error is caught in getWeather(city) and display the error message in the console.
// 4. Demonstration:
//     Call getWeather() for a city like "London" and test the error handling by calling it with an empty string.\

// Simulate fetching weather data using Promises
function fetchWeather(city) {
    return new Promise((resolve, reject) => {
      if (!city) {
        reject("City not provided");
      } else {
        setTimeout(() => {
          const mockWeatherData = {
            city: city,
            temperature: 25,
            condition: "Cloudy"
          };
          resolve(mockWeatherData);
        }, 2000); // Simulating 2-second delay
      }
    });
  }
  
  // Fetch and log weather using async/await
  async function getWeather(city) {
    try {
      const weather = await fetchWeather(city);
      console.log(`Weather in ${weather.city}: ${weather.temperature}°C, ${weather.condition}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Demonstration
  getWeather("London");  // Fetch and log weather for London
  getWeather("");        // Test error handling for empty city
  