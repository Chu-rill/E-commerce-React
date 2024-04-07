import React, { useState } from "react";
import { Button } from "../../components/ui/button";
function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function auth() {
    if (user === "" || pass === "") {
      alert("Input must be filled");
    }
  }
  return (
    <div className="w-52 bg-gray-200 rounded-xl shadow-lg shadow-black dark:shadow-gray-300 h-56 flex flex-col justify-around items-center">
      <input
        type="text"
        placeholder="Username"
        className="w-[90%] rounded-md dark:text-black p-1 cursor-pointer"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-[90%] rounded-md dark:text-black p-1 cursor-pointer"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button className=" w-24 dark:bg-black dark:text-white" onClick={auth}>
        Login
      </Button>
      <div className="flex justify-around w-[100%] items-center">
        <h6 className=" cursor-pointer dark:text-black">Login</h6>
        <h6
          className="cursor-pointer dark:text-black "
          onClick={() => props.setLogin((prevLogin) => !prevLogin)}
        >
          SignUp
        </h6>
      </div>
    </div>
  );
}

export default Login;
