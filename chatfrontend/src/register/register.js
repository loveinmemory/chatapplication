import React, { useState } from "react";
import "../home/home.scss";
import { Link } from "react-router-dom";

function Register({ socket }) {
  const [username, setusername] = useState("");
  const [schoolname, setschoolname] = useState("");
  const [classname, setclassname] = useState("");

  const sendData = () => {
    if (username !== "") {
      var roomname = schoolname + "_" + classname
      socket.emit("joinRoom", {username, roomname });
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome to ChatApp Register</h1>
      <input
        placeholder="user name"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <input
        placeholder="school name"
        value={schoolname}
        onChange={(e) => setschoolname(e.target.value)}
      ></input>
      <input
        placeholder="class name"
        value={classname}
        onChange={(e) => setclassname(e.target.value)}
      ></input>
      <Link to={`/chat/${schoolname}_${classname}/${username}`}>
        <button onClick={sendData}>Create Account</button>
      </Link>
    </div>
  );
}

export default Register;
