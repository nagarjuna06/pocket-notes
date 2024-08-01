import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (!err) {
      alert("No internet!");
      return;
    }
    return err.response.data;
  }
);

export default axios;
