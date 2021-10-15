import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.kacera.pe/api/",
});

export default axios;
