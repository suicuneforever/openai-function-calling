import { getNewYorkCityWeather } from "./weather";

export const availableFunctions = [
  {
    function: getNewYorkCityWeather,
    schema: {
      name: "getNewYorkCityWeather",
      description: "Gets the current weather in New York City.",
      parameters: { type: "object", properties: {} },
    },
  },
];
