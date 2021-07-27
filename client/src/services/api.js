import axios from "axios";

const api = axios.create({
  baseURL: "http://02fad2a28f9c.ngrok.io/chat",
});

export default api;
