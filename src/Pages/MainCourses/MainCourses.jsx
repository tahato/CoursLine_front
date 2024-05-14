import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import book from "../../assets/book2.webp"
import "./MainCourses.css"
const MainCourses = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <div className="sidebar">
                <img src={book} alt="book" className="bookimage"  />
            </div>
        </div>
    );
};

export default MainCourses;