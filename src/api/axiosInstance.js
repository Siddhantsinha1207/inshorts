import axios from "axios";

const API_KEY = "83bc96fb37864af7bfc5f371af83280b";

export const axiosInstance = axios.create({
  baseURL: `https://newsapi.org/v2/everything?q=tesla&from=2025-02-15&sortBy=publishedAt&apiKey=${API_KEY}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
