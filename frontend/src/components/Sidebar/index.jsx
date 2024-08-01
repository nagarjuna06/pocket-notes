import useGroup from "../../../hooks/use-group";
import ChatCard from "../ChatCard";
import "./index.css";

const SideBar = () => {
  const { groups } = useGroup();
  return (
    <div className="sidebar">
      <h2 className="app__name">{import.meta.env.VITE_APP_NAME}</h2>

      {groups.map((each) => (
        <ChatCard {...each} key={each.id} />
      ))}
    </div>
  );
};

export default SideBar;
