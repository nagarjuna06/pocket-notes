import { Link, useParams } from "react-router-dom";
import "./index.css";
import Profile from "./Profile";
const ChatCard = ({ profile, color, title, id }) => {
  const { groupId } = useParams();
  return (
    <Link
      to={`/${id}`}
      className={`chat__card ${groupId === id ? "chat__card__selected" : ""}`}
    >
      <Profile color={color} profile={profile} />
      <p className="chat__card__title">{title}</p>
    </Link>
  );
};

export default ChatCard;
