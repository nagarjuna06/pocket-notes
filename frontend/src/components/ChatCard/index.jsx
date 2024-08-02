import { Link } from "react-router-dom";
import "./index.css";
const ChatCard = ({ profile, color, title, id }) => {
  return (
    <Link to={`/${id}`} className="chat__card">
      <div
        className="chat__card__profile"
        style={{ "--chat-profile-color": color }}
      >
        {profile}T
      </div>
      <p className="chat__card__title">{title}</p>
    </Link>
  );
};

export default ChatCard;
