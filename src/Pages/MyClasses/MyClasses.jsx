import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardClasse from "../../Components/CardClasse/CardClasse";

const MyClasses = () => {
  const { user } = useSelector((state) => state.auth);
  const [classes, setClasses] = useState();

  useEffect(() => {
    axios
      .get(`https://courseline-back.onrender.com/classe/user/${user._id}`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => console.log("connection failed", err.message));
  }, []);
  return (
    <div className="courseContainer">
        {classes?.map((classe) => (
          <CardClasse classe={classe} key={classe._id}></CardClasse>
        ))}
    </div>
  );
};

export default MyClasses;
