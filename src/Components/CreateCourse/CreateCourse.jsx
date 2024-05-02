import "./CreateCourse.css";
const CreateCourse = () => {
  return (
    <div>
      <div className="upcreate"><h2> Create course</h2></div>
      <div className="FormulaireCreateCourse">
        <div className="leftForm">
          <label htmlFor="">School :</label>
          <label htmlFor=""> Specialty (Branch): </label>
          <label htmlFor=""> Yaer Level: </label>
          <label htmlFor="">Category :</label>
          <label htmlFor="">Price:</label>
          <label htmlFor="">Description: </label>
        </div>
        <form action="" className="rightForm">
          <select name="" id="">
            <option value="">Middle School</option>
            <option value="">Secondary School</option>
            <option value="">University</option>
          </select>
          <input type="text" placeholder="Enter speciality" />
          <select name="level" id="level">
            <option value="">1st year</option>
            <option value=""> 2nd year</option>
            <option value=""> 3rd year</option>
            <option value=""> 4th yaer</option>
          </select>
          <input type="text" placeholder="Mathematique"name="Category"  />
          <input type="text" placeholder="" /> 
          <textarea name="" id="" cols="30" rows="7"></textarea>
          <button type="submit" className="bluebtn "> Publish course</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;

