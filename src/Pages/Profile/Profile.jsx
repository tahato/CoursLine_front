import { useCallback, useState } from "react";
import "./Profile.css";
import { useDropzone } from "react-dropzone";
const Profile = () => {

// image dropzone
    const [file, setFile] = useState([]);

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


  return (
    <div>
        
      <div className="upcreate">
        <h2> Profile</h2>
      </div>

      <div>
            <div className="addphoto" {...getRootProps()}>
                <input {...getInputProps()} />

                {file.length !== 0 ? (
                  <div>{photo}</div>
                ) : (
                  <div className="p">
                    <p>
                      {" "}
                      click to <br />
                      add photo
                    </p>
                  </div>
                )}
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
         <input type="text" name="firstName" />
         
         <input type="text"name="lastName" />
         <input type="date" name="birthday" id="" />
         <input type="tel" name="" id="" />
        <input type="Adresse" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
          ></textarea>
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
