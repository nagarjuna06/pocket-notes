import routes from "./api-routes";
import axios from "./axios";

export const createGroup = (data) => {
  return axios.post(routes.create_group, data);
};

export const getGroups = () => {
  return axios.get(routes.get_groups);
};
