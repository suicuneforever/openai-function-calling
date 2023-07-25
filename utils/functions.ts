import { getNewYorkCityWeather } from "./weather";

export const availableFunctions = [
  {
    function: getNewYorkCityWeather,
    schema: {
      name: "getNewYorkCityWeather",
<<<<<<< HEAD
      description: "Gets the current weather for only New York City.",
=======
      description: "Gets the current weather in New York City.",
>>>>>>> 28649fd4b293a6cf485e8c27babc6b49d9eeb738
      parameters: { type: "object", properties: {} },
    },
  },
];
