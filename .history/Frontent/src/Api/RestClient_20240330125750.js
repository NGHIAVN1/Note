import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.1.176:3000",
  headers: {
    // Authorization:
    "Content-Type": "application/json",
    timeout: 1000,
  },
});
export default instance;
