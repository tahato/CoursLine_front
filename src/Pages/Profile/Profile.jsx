import { useCallback, useEffect, useState } from "react";
import bgProfile from "../../assets/bgProfile.webp";
import "./Profile.css";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { MdAddAPhoto } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [tel, setTel] = useState();
  const [adresse, setAdresse] = useState();
  const [birth, setBirth] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    console.log("this is user", user);
    setTel(user.tel);
    setAdresse(user.adresse);
    setBirth(user.birthday);
    setDesc(user.description);
    setImage(user.image);
  }, []);

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
  console.log("ppppppppppppppp", photo);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("tel", tel);
    data.append("adresse", adresse);
    data.append("birthday", birth);
    data.append("description", desc);
    data.append("image", file[0] ? file[0] : image);

    axios
      .put(`${import.meta.env.VITE_URL}/user/${user._id}`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(res.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
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
        <h2> Profile</h2>
      </div>
      <div className="myProfile">
        <div className="bgProfile">
          <img src={bgProfile} alt="bgProfile" />
        </div>
        <div className="infoProfile"></div>
        {photo.length == 0 ? (
          <img src={image} alt="" className="addphoto" />
        ) : (
          <div className="addphoto">{photo}</div>
        )}

        <div className="addPhbtn" {...getRootProps()}>
          <input {...getInputProps()} />
          <MdAddAPhoto />
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
          <input type="text" value={user.firstName} name="firstName" readOnly />
          <input type="text" value={user.lastName} name="lastName" readOnly />
          <input
            type="date"
            name="birthday"
            value={birth}
            id=""
            onChange={(e) => setBirth(e.target.value)}
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            type="Adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <textarea
            name="desc"
            id="desc"
            value={desc}
            cols="30"
            rows="7"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button type="submit" className="bluebtn ">
            {" "}
            Edit My Profile
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

export default Profile;
