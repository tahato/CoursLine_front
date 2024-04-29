import { useState } from "react";
import "./ResetPassWord.css";

const ResetPassWord = () => {
  const [email, setEmail] = useState("");
  const [reset, setReset] = useState("send");
  const send = () => {
    setReset("confirm");
  };
  const confirm = () => {
    setReset("reset");
  };
  const resetPassword = () => {
    setReset("reset");
  };
  console.log(email);
  return (
    <div className="forgetpasspage">
      <h1>Reset Password </h1>
      <div className="forgetcontainer">
        <h1>Forgot Password </h1>
        <form action="" className="forgetform">
          <label htmlFor="">
            {reset == "send"
              ? "email adress"
              : reset == "confirm"
              ? "enter confirmation code"
              : "enter new password"}
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type={reset == "send" ? "email" : ""}
            name=""
            id=""
            value={email}
          />
        </form>

        <button className="bluebtn" on onClick={reset=="send" ? send :reset=="confirm"?confirm:resetPassword}>
          {reset == "confirm"
            ? " confirm"
            : reset == "send"
            ? "Send confirmation email"
            : "enter new password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassWord;
