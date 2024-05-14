import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./CreateClasse.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CreateClasse = () => {
const {courseId}=useParams()
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_URL}/classe`,
        {
          name,
          day,
          startTime,
          endTime,
          user:user._id,
          course:courseId,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) =>
        toast.success(res.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      )
      .catch((err) =>console.log(err)
        // toast.error(err.response.data, {
        //   position: "top-left",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // })
      );
  };

  return (
    <div>
      <div className="upcreate">
        {" "}
        <h2>Add New Classe</h2>
      </div>
      <div className="FormulaireCreateCourse">
        <div className="leftForm">
          <label htmlFor="">Classe Name :</label>
          <label htmlFor=""> Day : </label>
          <label htmlFor="" id="time">
            {" "}
            Start Time :{" "}
          </label>
        </div>

        <form action="" className="rightForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="classeName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="settime">
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Saturday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Saturday</label>
            </span>
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Sunday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Sunday</label>
            </span>
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Monday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Monday</label>
            </span>
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Tuesday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Tuesday</label>
            </span>
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Wednesday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Wednesday</label>
            </span>
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Thursday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Thursday</label>
            </span>
            <span>
              <input
                type="radio"
                name="day"
                id="day"
                value="Friday"
                onChange={(e) => setDay(e.target.value)}
              />
              <label htmlFor="">Friday</label>
            </span>
          </div>
          <div className="timeinput">
            <input
              type="time"
              name=""
              id=""
              onChange={(e) => setStartTime(e.target.value)}
            />
            <label htmlFor=""> Ending Time:</label>
            <input
              type="time"
              name=""
              id=""
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>

          <button type="submit" className="bluebtn ">
            {" "}
            Add classe
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CreateClasse;
