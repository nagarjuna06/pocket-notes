import routes from "./api-routes";
import axios from "./axios";

export const createGroupApi = (data) => {
  return axios.post(routes.create_group, data);
};

export const getGroupsApi = () => {
  return axios.get(routes.get_groups);
};
