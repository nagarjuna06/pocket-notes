import Icon from "../Icon";
import "./index.css";
import { usePocketNotes } from "../../../context/notesContext";

const ChatBox = () => {
  const { createNote, note, setNote, updateNote } = usePocketNotes();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note.id) {
      updateNote(note);
    } else {
      createNote(note);
    }
    setNote({ content: "" });
  };
  return (
    <form className="chat__box" onSubmit={handleSubmit}>
      <textarea
        rows={5}
        name="content"
        cols={"100%"}
        value={note.content}
        onChange={(e) =>
          setNote((prev) => ({ ...prev, content: e.target.value }))
        }
      />
      <button type="submit" className="send__button" disabled={!note.content}>
        <Icon
          name="enter"
          size={25}
          color={note.content ? "#001F8B" : "#ABABAB"}
        />
      </button>
    </form>
  );
};

export default ChatBox;
