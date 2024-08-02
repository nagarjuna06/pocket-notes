import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createGroupApi, getGroupsApi } from "../apis/group";
import { useParams } from "react-router-dom";
import {
  createNoteApi,
  deleteNoteApi,
  getNotesApi,
  updateNoteApi,
} from "../apis/note";

const NotesContext = createContext({
  groups: [],
  notes: [],
  group: {},
  note: {
    content: "",
  },
  setNote: () => {},
  createGroup: () => {},
  createNote: () => {},
  updateNote: () => {},
  deleteNote: () => {},
});

const NotesProvider = ({ children }) => {
  const { groupId } = useParams();
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState([]);
  const [group, setGroup] = useState();
  const [note, setNote] = useState({ content: "" });

  const createGroup = async (values) => {
    const res = await createGroupApi(values);
    if (res.data) {
      setGroups((prev) => [res.data, ...prev]);
    }
  };
  const fetchGroups = useCallback(async () => {
    const res = await getGroupsApi();
    setGroups(res);
  }, []);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

  const fetchNotes = useCallback(async () => {
    setNotes([]);
    if (!groups.length) {
      return;
    }

    const group = groups.filter((g) => g.id === groupId);
    if (!group) return;
    setGroup(group[0]);

    if (!groupId) return;
    const res = await getNotesApi(groupId);

    if (res) {
      setNotes(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, groups]);

  const createNote = async (note) => {
    const res = await createNoteApi({ ...note, groupId });
    if (res.data) {
      setNotes((prev) => [...prev, res.data]);
    }
  };

  const updateNote = async (note) => {
    const res = await updateNoteApi(note.id, {
      content: note.content,
      groupId,
    });

    if (res.data) {
      const updatedNotes = [...notes];
      const index = notes.findIndex((n) => n.id === note.id);
      updatedNotes[index] = res.data;
      setNotes(updatedNotes);
    }
  };
  const deleteNote = async (id) => {
    const res = await deleteNoteApi(id);
    if (res.data) {
      const updatedNotes = notes.filter((n) => n.id !== res.data.id);
      setNotes(updatedNotes);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <NotesContext.Provider
      value={{
        groups,
        notes,
        group,
        createGroup,
        createNote,
        note,
        setNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const usePocketNotes = () => {
  return useContext(NotesContext);
};
