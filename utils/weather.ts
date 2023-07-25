<<<<<<< HEAD
export async function getNewYorkCityWeather() {
  const data = await fetch(
    "https://api.weather.gov/gridpoints/OKX/36,34/forecast"
  ).then((res) => res.json());

  const currentWeather = data.properties.periods[0];
  return `Here is the current forecast for New York City: ${currentWeather.detailedForecast}`;
=======
export function getNewYorkCityWeather() {
  return "It is very humid.";
>>>>>>> 28649fd4b293a6cf485e8c27babc6b49d9eeb738
}
