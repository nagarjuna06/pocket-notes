const routes = {
  // group api routes
  create_group: "/group",
  get_groups: "/group/all",

  // notes api routes
  create_note: "/note",
  get_notes: "/note/all",
  update_note: (id) => `/note/${id}`,
  delete_note: (id) => `/note/${id}`,
};

export default routes;
