export async function getNewYorkCityWeather() {
  const data = await fetch(
    "https://api.weather.gov/gridpoints/OKX/36,34/forecast"
  ).then((res) => res.json());

  const currentWeather = data.properties.periods[0];
  return `Here is the current forecast for New York City: ${currentWeather.detailedForecast}`;
}
