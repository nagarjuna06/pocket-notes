import { formatDate } from "date-fns";
import "./index.css";
import Icon from "../Icon";
import { usePocketNotes } from "../../../context/notesContext";

const Note = ({ content, updatedAt, edited, id }) => {
  const { setNote, deleteNote } = usePocketNotes();
  return (
    <div className="note">
      <p>{content}</p>
      <div className="note__footer">
        <button
          onClick={() => setNote({ content, id })}
          className="note__actions"
        >
          <Icon name="pencil" size={15} />
        </button>
        <button onClick={() => deleteNote(id)} className="note__actions">
          <Icon name="trash" size={15} color="red" />
        </button>
        <span>{edited && "Edited"}</span>
        <span>{formatDate(updatedAt, "dd MMMM yyyy")}</span>
        <Icon name="ellipse" size={6} color="#353535" />
        <span>{formatDate(updatedAt, "hh:mm a")}</span>
      </div>
    </div>
  );
};

export default Note;
