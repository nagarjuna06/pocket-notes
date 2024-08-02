import { Link } from "react-router-dom";
import useGroup from "../../../hooks/use-group";
import ChatCard from "../ChatCard";
import "./index.css";

const Sidebar = () => {
  const { groups } = useGroup();
  return (
    <div className="sidebar">
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
    </div>
  );
};

export default Sidebar;
