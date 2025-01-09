import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../index.css";

const Auth: React.FC = () => {
    const [action, setAction] = useState<"Login" | "Sign Up">("Login");
  
    return (
      <div className="auth">
        <div className="authAction">
          <button 
            onClick={() => setAction("Login")} 
            className={action === "Login" ? "green" : "grey"}
          >
            Login
          </button>
          <button 
            onClick={() => setAction("Sign Up")} 
            className={action === "Sign Up" ? "green" : "grey"}
          >
            Sign Up
          </button>
        </div>
        {action === "Login" ? <Login /> : <Signup />}
      </div>
    );
  };
  
  export default Auth;
  
