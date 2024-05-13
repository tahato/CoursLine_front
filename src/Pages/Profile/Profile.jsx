import { useCallback, useState } from "react";
import bgProfile from "../../assets/bgProfile.webp";
import "./Profile.css";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import axios from "axios";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
const [tel,setTel]=useState()
const [adresse,setAdresse]=useState()
const [birth,setBirth]=useState()
const [desc,setDesc]=useState()

  // image dropzone
  const [file, setFile] = useState([]);
console.log(file);
  const onDrop = useCallback((acceptedFiles) => {
    setFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const photo = file.map((file) => (
    <img src={file.preview} alt={file.name} className="photoProfile" />
  ));
  const handleSubmit=(e)=>{
    e.preventDefault()
    let data =new FormData()
    data.append("tel",tel)
    data.append("adresse",adresse)
    data.append("birthday",birth)
    data.append("description",desc)
    data.append("image",file[0])
   
    axios
      .put(`https://courseline-back.onrender.com/user/${user._id}`, 
       data,
       {
        headers: {
          'content-type': 'multipart/form-data',
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
  }

  return (
    <div>
      <div className="upcreate">
        <h2> Profile</h2>
      </div>
      <div className="myProfile">
        <div className="bgProfile">
          <img src={bgProfile} alt="bgProfile" />
        </div>
        <div className="infoProfile"></div>
       
          <div className="addphoto" {...getRootProps()}>
            <input {...getInputProps()}  />

            {file.length !== 0 &&(
              <div>{photo}</div>
            ) }
          </div>
  
      </div>

      <div className="FormulaireCreateCourse">
        <div className="leftForm">
          <label htmlFor="">Firstname :</label>
          <label htmlFor=""> Lastname : </label>
          <label htmlFor=""> Birthday: </label>
          <label htmlFor="">Phone Numbe :</label>
          <label htmlFor="">Adress</label>
          <label htmlFor="">Description: </label>
        </div>
        <form action="" className="rightForm" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={user.firstName} name="firstName" readOnly/>
          <input type="text" value={user.lastName} name="lastName" readOnly />
          <input type="date" name="birthday" id="" onChange={(e)=>setBirth(e.target.value)} />
          <input type="tel" name="" id=""  onChange={(e)=>setTel(e.target.value)}/>
          <input type="Adresse"  onChange={(e)=>setAdresse(e.target.value)}/>
          <textarea name="" id="" cols="30" rows="7"onChange={(e)=>setDesc(e.target.value)}></textarea>
          <button type="submit" className="bluebtn ">
            {" "}
            Edit My Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
