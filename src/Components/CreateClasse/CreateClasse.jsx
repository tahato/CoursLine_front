import { useState } from "react";
import "./CreateClasse.css";
const CreateClasse = () => {
  const [ name, setName ] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
console.log(name,day,startTime,endTime);
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

        <form action="" className="rightForm">
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
    </div>
  );
};

export default CreateClasse;
