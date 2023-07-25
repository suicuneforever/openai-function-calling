import { getNewYorkCityWeather } from "./weather";

export const availableFunctions = [
  {
    function: getNewYorkCityWeather,
    schema: {
      name: "getNewYorkCityWeather",
      description: "Gets the current weather for only New York City.",
      parameters: { type: "object", properties: {} },
    },
  },
];
