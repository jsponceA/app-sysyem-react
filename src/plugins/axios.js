import axios from "axios";

const BASE_API_URL = "https://users-crud.academlo.tech";
const axiosSecure = axios.create({
  baseURL: BASE_API_URL,
});

export { axiosSecure };
