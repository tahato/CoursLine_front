import axios from "axios";
import React, { useEffect, useState } from "react";
import CardClasse from "../CardClasse/CardClasse";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";

import "./Classes.css";
const Classes = () => {
  const [classes, setClasses] = useState();
  const { courseId } = useParams();
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get(`https://courseline-back.onrender.com/classe/course?courseId=${courseId}`)
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

      <div className="displayError">{err}</div>

      <div className="courseContainer">
        {classes?.map((classe) => (
          <CardClasse classe={classe} key={classe._id}></CardClasse>
        ))}
      </div>
    </div>
  );
};

export default Classes;
