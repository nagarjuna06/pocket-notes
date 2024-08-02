const routes = {
  // group api routes
  create_group: "/group",
  get_groups: "/group/all",

  // notes api routes
  create_note: "/note",
  get_notes: (groupId) => `/note/${groupId}/all`,
  update_note: (noteId) => `/note/${noteId}`,
  delete_note: (noteId) => `/note/${noteId}`,
};

export default routes;
