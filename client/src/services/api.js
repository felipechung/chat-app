import axios from "axios";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
const api = axios.create({
  baseURL: "https://3dbea24c28bb.ngrok.io/chat/",
});

export default api;
