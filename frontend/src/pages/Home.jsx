import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Home;
