import { Link, useParams } from "react-router-dom";
import ChatCard from "../ChatCard";
import "./index.css";
import GroupPopup from "../GroupPopup";
import { usePocketNotes } from "../../../context/notesContext";

const Sidebar = () => {
  const { groups, createGroup } = usePocketNotes();
  const { groupId } = useParams();
  return (
    <div className="sidebar" style={{ "--chat": groupId ? "none" : "block" }}>
      <div className="app__name">
        <Link to="/" className="app__name__link">
          {import.meta.env.VITE_APP_NAME}
        </Link>
      </div>
      <div className="sidebar__chat_cards">
        {groups.map((each) => (
          <ChatCard {...each} key={each.id} />
        ))}
      </div>
      <GroupPopup sendToApi={createGroup} />
    </div>
  );
};

export default Sidebar;
