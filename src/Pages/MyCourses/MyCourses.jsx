import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardCourse from "../../Components/CardCourse/CardCourse";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const MyCourses = () => {
  const user = useSelector((state) => state.auth?.user);
  const [courses, setCourses] = useState();
//  student have the refernce to courses so in student case i don't need to send a request to get courses
  useEffect(() => {
    if (user.role == "student") {
      setCourses(user.course);
    } else {
      axios
        .get(`http://localhost:3000/course/user/${user._id}`)
        .then((res) => {
          setCourses(res.data);
        })
        .catch((err) => console.log(err.response.data.message));
    }
  }, []);
  return (
    <div>
      <div className="courseContainer">
        {courses?.map((course) => (
          <CardCourse key={course._id} course={course}></CardCourse>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
