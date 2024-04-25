import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});
export default instance;
