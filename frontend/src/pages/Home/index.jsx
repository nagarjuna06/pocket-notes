import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "./index.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
