import axios from "axios";

const Api = axios.create({ baseURL: "https://getnet.herokuapp.com" });
export default Api;
