import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for backend login logic
    alert("Login successful! (demo)");

    // 🧠 Save user info (you can add backend data later)
    const userData = {
      name: email.split("@")[0], // use part of email as username for now
      email: email,
      joined: "March 2024",
      plan: "Premium",
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">
          Welcome back! Please login to your account.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot-password">
            <span onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </span>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
