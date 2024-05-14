import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";

import "./Classes.css";
import CardClasse from "../../Components/CardClasse/CardClasse";
const Classes = () => {
  const [classes, setClasses] = useState();
  const { courseId } = useParams();
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/classe/course?courseId=${courseId}`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => setErr(err.response.data));
  }, []);

  return (
    <div>
      {user.role == "teacher" && (
        <div className="upClasse">
          <IoMdAddCircleOutline />

          <Link
            className="classeLink "
            to={`/teacher/createClasse/${courseId}`}
          >
            {" "}
            Add a classe
          </Link>
        </div>
      )}

      {!classes ? (
        <div className="displayError">
          {" "}
          <h1>{err}</h1>
        </div>
      ) : (
        <div className="courseContainer">
          {classes?.map((classe) => (
            <CardClasse classe={classe} key={classe._id}></CardClasse>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
