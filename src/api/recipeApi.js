import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "Your Api Key",
  },
});

// a75cb1b594324f6792525bca8233ce38

export default api;
