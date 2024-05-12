import { useEffect, useState } from "react";
import "./Meet.css";
import axios from "axios";
import { useSelector } from "react-redux";
const Meet = () => {
    const {user}=useSelector((state)=>state.auth)
  const [roomUrl, setRoomUrl] = useState();
  const [hostroomUrl, setHostRoomUrl] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/meet").then((res) => {
      setRoomUrl(res.data.roomUrl);
      setHostRoomUrl(res.data.hosturl);
    });
  }, []);
  return (
    <div className="startMeet">
      <a href={user.role=="teacher"? hostroomUrl:roomUrl} className="bluebtn" target="blank">
        start classe
      </a>
    </div>
  );
};

export default Meet;
