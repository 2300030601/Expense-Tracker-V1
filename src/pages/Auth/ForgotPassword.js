import React from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email!");
    navigate("/signin");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>
        <p className="auth-subtitle">
          Enter your registered email address to receive a password reset link.
        </p>

        <form className="auth-form" onSubmit={handleReset}>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Send Reset Link</button>
        </form>

        <p className="auth-footer">
          Back to{" "}
          <span className="auth-link" onClick={() => navigate("/signin")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
