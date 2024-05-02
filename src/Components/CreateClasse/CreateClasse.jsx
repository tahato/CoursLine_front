import "./CreateClasse.css";
const CreateClasse = () => {
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
          <input type="text" name="classeName" />
          <div className="settime">
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Saturday</label>
            </span>
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Sunday</label>
            </span>
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Monday</label>
            </span>
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Tuesday</label>
            </span>
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Wednesday</label>
            </span>
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Thursday</label>
            </span>
            <span>
              <input type="radio" name="day" id="day" value="saturday" />
              <label htmlFor="">Friday</label>
            </span>
          </div>
          <div className="timeinput">
            <input type="time" name="" id="" />
            <label htmlFor=""> Ending Time:</label>
            <input type="time" name="" id="" />
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
