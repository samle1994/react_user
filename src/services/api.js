import axios from "axios";
const url = {
  baseUrl: "https://api.lesam.store/api/Frontend/",
};
const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const api = {
  url: url,
  instance: instance,
  get: instance.get,
  promise: axios.all,
  spread: axios.spread,
};
export default api;
