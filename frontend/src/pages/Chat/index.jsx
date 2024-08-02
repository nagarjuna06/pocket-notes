import { Link } from "react-router-dom";
import { usePocketNotes } from "../../../context/notesContext";
import ChatBox from "../../components/Chat/Chatbox";
import Profile from "../../components/ChatCard/Profile";
import Icon from "../../components/Icon";
import "./index.css";
import Note from "../../components/Chat/Note";
const Chat = () => {
  const { group, notes } = usePocketNotes();
  if (!group) return;
  return (
    <div className="chat">
      <div className="chat__header">
        <Link to={"/"} className="chat__header__back_link">
          <Icon name="left-arrow" color="#fff" />
        </Link>
        <Profile {...group} />
        <h3>{group.title}</h3>
      </div>
      <div className="chat__area">
        {notes.map((note) => (
          <Note {...note} key={note.id} />
        ))}
      </div>
      <ChatBox />
    </div>
  );
};

export default Chat;
