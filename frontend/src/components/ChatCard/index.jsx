import { useNavigate } from "react-router-dom";
import "./index.css";
const ChatCard = ({ profile, color, title, id }) => {
  const router = useNavigate();
  return (
    <div className="chat__card" onClick={() => router(`/${id}`)}>
      <div
        className="chat__card__profile"
        style={{ "--chat-profile-color": color }}
      >
        {profile}T
      </div>
      <p className="chat__card__title">{title}</p>
    </div>
  );
};

export default ChatCard;
