import React, { useState } from "react";
import { Button } from "../../components/ui/button";

function SignUp(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  function auth() {
    if (user === "" || pass === "" || email === "") {
      alert("Input must be filled");
    }
  }

  return (
    <div className=" w-64 bg-gray-200 rounded-xl shadow-lg shadow-black dark:shadow-gray-300 h-56 flex flex-col justify-around items-center">
      <input
        type="text"
        placeholder="Username"
        className="user w-[90%] rounded-md p-1 cursor-pointer focus:outline-purple-600"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="pass w-[90%] rounded-md p-1 cursor-pointer focus:outline-purple-600"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <input
        type="text"
        placeholder="E-mail"
        className="pass w-[90%] rounded-md p-1 cursor-pointer focus:outline-purple-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button className="w-24 dark:bg-black dark:text-white" onClick={auth}>
        SignUp
      </Button>
      <div className="flex justify-around w-[100%] items-center">
        <h6
          className="cursor-pointer dark:text-black"
          onClick={() => props.setLogin((prevLogin) => !prevLogin)}
        >
          Login
        </h6>
        <h6 className="cursor-pointer dark:text-black">SignUp</h6>
      </div>
    </div>
  );
}

export default SignUp;
