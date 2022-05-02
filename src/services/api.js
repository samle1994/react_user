import axios from "axios";
const url = {
  baseUrl: "https://api.lesam.store/api",
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
};
export default api;
