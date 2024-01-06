// temperatureConverter.js

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Example usage
const celsiusTemperature = 25;
const fahrenheitTemperature = 77;

console.log(`${celsiusTemperature} Celsius is ${celsiusToFahrenheit(celsiusTemperature)} Fahrenheit.`);
console.log(`${fahrenheitTemperature} Fahrenheit is ${fahrenheitToCelsius(fahrenheitTemperature)} Celsius.`);
