import routes from "./api-routes";
import axios from "./axios";

export const getNotesApi = (groupId) => {
  return axios.get(routes.get_notes(groupId));
};

export const createNoteApi = (data) => {
  return axios.post(routes.create_note, data);
};

export const updateNoteApi = (noteId, data) => {
  return axios.put(routes.update_note(noteId), data);
};

export const deleteNoteApi = (noteId) => {
  return axios.delete(routes.delete_note(noteId));
};
