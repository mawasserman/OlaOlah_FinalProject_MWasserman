/* <div className="sign-up-form"> */

import React, { useState } from "react";
import '../index.css';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
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

    const newErrors: Partial<LoginFormData> = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/auth/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setBackendMessage("Login successful!");
      } else {
        const errorMessage = await response.text();
        setBackendMessage(errorMessage || "Error during login");
      }
    } catch (error) {
      setBackendMessage("An unexpected error occurred");
      console.error("Error:", error);
    }

    setFormData({ email: "", password: "" });
    setErrors({});
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="sign-up-form">
      <form  onSubmit={handleSubmit}>
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

        <button type="submit" className="submit-login">Login</button>
      </form>
      </div>
      {backendMessage && (
        <div className={backendMessage.includes("Error") ? "error" : "success"}>
          {backendMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
