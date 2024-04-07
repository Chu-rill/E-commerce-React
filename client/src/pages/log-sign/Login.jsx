import React from "react";
import { Button } from "../../components/ui/button";
function Login() {
  return (
    <div className="bg-blue-200 w-92 h-48 flex flex-col justify-around items-center">
      <input type="text" placeholder="Username" className="w-[80%]" />
      <input type="password" placeholder="Password" className="w-[80%]" />
      <Button className="w-16">Login</Button>
    </div>
  );
}

export default Login;
