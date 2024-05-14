import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardClasse from "../../Components/CardClasse/CardClasse";

const MyClasses = () => {
  const { user } = useSelector((state) => state.auth);
  const [classes, setClasses] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/classe/user/${user._id}`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => console.log("connection failed", err.message));
  }, []);
  
  return (
    <>
    {classes?.length==0 ? (
     <div className="displayError"> <h1>No Classes</h1> </div>

    ):(
      <div className="courseContainer">
      {classes?.map((classe) => (
        <CardClasse classe={classe} key={classe._id}></CardClasse>
      ))}
  </div>
    )}
    
    </>
   
  );
};

export default MyClasses;
