import routes from "./api-routes";
import axios from "./axios";

export const getNotes = () => {
  return axios.get(routes.get_notes);
};

export const createNote = (data) => {
  return axios.post(routes.create_note, data);
};

export const updateNote = (id, data) => {
  return axios.put(routes.update_note(id), data);
};

export const deleteNote = (id) => {
  return axios.delete(routes.delete_note(id));
};
