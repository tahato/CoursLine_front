import { useState } from "react";
import "./CreateCourse.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
const CreateCourse = () => {
  const { user } = useSelector((state) => state.auth);
console.log(user);
  const [school, setSchool] = useState("");
  const [module, setModule] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  console.log(category);

  // create a course ...........................
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/course/create", {
        school,
        category,
        level,
        module,
        price,
        description,
        user:user._id
      },{
        headers: {
            'Authorization': 'Bearer'+localStorage.getItem("token")
    
        }})
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
      .catch((err) =>
        toast.error(err.response.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );
  };

  return (
    <div>
      <div className="upcreate">
        <h2> Create course</h2>
      </div>
      <div className="FormulaireCreateCourse">
        <div className="leftForm">
          <label htmlFor="">School :</label>
          <label htmlFor=""> Category : </label>
          <label htmlFor=""> Yaer Level: </label>
          <label htmlFor="">Module :</label>
          <label htmlFor="">Price:</label>
          <label htmlFor="">Description: </label>
        </div>
        <form action="" className="rightForm" onSubmit={(e)=>(handleSubmit(e))}>
          <select name="school" onChange={(e) => setSchool(e.target.value)}>
            <option value="Middle Schoo">Middle School</option>
            <option value="Secondary School">Secondary School</option>
            <option value="University">University</option>
          </select>
          <input
            type="text"
            placeholder="Enter speciality"
            onChange={(e) => setCategory(e.target.value)}
          />
          <select
            name="level"
            id="level"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="1st year">1st year</option>
            <option value="2nd yea"> 2nd year</option>
            <option value="3rd yea"> 3rd year</option>
            <option value="4th yaer"> 4th yaer</option>
          </select>
          <input
            type="text"
            placeholder="Mathematique"
            name="module"
            onChange={(e) => setModule(e.target.value)}
          />
          <input
            type="text"
            placeholder=""
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" className="bluebtn ">
            {" "}
            Publish course
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

export default CreateCourse;
