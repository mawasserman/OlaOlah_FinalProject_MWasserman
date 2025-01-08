import React, { useState } from "react";
import '../index.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {

  const [action, setAction] = useState<string>("Sign Up");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const [backendMessage, setBackendMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3002/auth/api/signup", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Error with signup");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };
  

  return (
    <div className="sign-up-form">
      <h1>{action}</h1>
      <form onSubmit={handleSubmit}>
        {action==="Login"?<div></div>:<div><label id='nameSignup' htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        </div>}{errors.name && <span className="error">{errors.name}</span>}
        
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
        
        {action==="Login"?<div></div>:<div><label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />
       </div>}
         {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
        <button type="submit" className={action==="Login"?"submit grey":"submit-signup"} onClick={()=>{setAction("Sign up")}}>Sign Up</button>
        <button type="submit" className={action==="Sign up"?"submit grey":"submit-signup"} onClick={()=>{setAction("Login")}}>Login</button>
      </form>

      {backendMessage && <div className={backendMessage.includes('Error') ? 'error' : 'success'}>{backendMessage}</div>}
    </div>
  );
};

export default Signup;