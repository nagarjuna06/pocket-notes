import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "./index.css";
import NotesProvider from "../../../context/notesContext";
const Home = () => {
  return (
    <NotesProvider>
      <div className="home">
        <Sidebar />
        <Outlet />
      </div>
    </NotesProvider>
  );
};

export default Home;
