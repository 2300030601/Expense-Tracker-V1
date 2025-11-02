import React from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend signup logic
    alert("Account created successfully! (demo)");
    navigate("/signin");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <p className="auth-subtitle">
          Create your account and start managing your expenses easily.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/signin")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
