import React, { useState } from "react";
import '../index.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
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
    if (action === "Sign Up" && !formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (action === "Sign Up" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const endpoint = action === "Sign Up" ? "signup" : "login";
      const response = await fetch(`http://localhost:3002/auth/api/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: action === "Sign Up" ? formData.name : undefined,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setBackendMessage(action === "Sign Up" ? "Signup successful!" : "Login successful!");
        if (action === "Login") {
          localStorage.setItem("token", data.token);
        }
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setErrors({});
      } else {
        setBackendMessage(data.message || "Error with login/signup");
      }
    } catch (error) {
      console.error("Error:", error);
      setBackendMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="sign-up-form">
      <h1>{action}</h1>
      <form onSubmit={handleSubmit}>
        {action === "Sign Up" && (
          <>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </>
        )}

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

        {action === "Sign Up" && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </>
        )}

        <button type="submit" className="submit">
          {action}
        </button>
        <button
          type="button"
          className="toggle"
          onClick={() => {
            setAction(action === "Sign Up" ? "Login" : "Sign Up");
            setErrors({});
            setBackendMessage(null);
          }}
        >
          Switch to {action === "Sign Up" ? "Login" : "Sign Up"}
        </button>
      </form>

      {backendMessage && (
        <div className={backendMessage.includes("Error") ? "error" : "success"}>
          {backendMessage}
        </div>
      )}
    </div>
  );
};

export default Signup;
