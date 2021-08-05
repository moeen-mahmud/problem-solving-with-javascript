/**
 * Create a function that will convert from Fahrenheit to Celsius
 */

function toCelsius(temp) {
  const celsius = (temp - 32) * (5 / 9);
  return celsius;
}

console.log(toCelsius(90.6));
