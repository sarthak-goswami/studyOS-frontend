import React, { useState } from "react";
import { Brain, ArrowRight, Eye, EyeOff } from "lucide-react";
import "../stylesheets/Auth.css";

function Auth({ onLogin }) {
  const [mode, setMode] = useState("login");

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo authentication
    localStorage.setItem(
      "studyos_user",
      JSON.stringify({
        name: form.name || "Sarthak",
        email: form.email,
      })
    );

    onLogin();
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        {/* LEFT SIDE */}

        <div className="auth-brand">

          <div className="auth-logo">
            <Brain size={22} />
          </div>

          <h1>StudyOS</h1>

          <p>
            Your study plan should adapt to you.
          </p>

          <div className="auth-feature">

            <div className="feature-line">
              <span>01</span>
              <div>
                <strong>Find your weaknesses</strong>
                <p>
                  Short diagnostic quizzes identify
                  what you actually need to study.
                </p>
              </div>
            </div>

            <div className="feature-line">
              <span>02</span>
              <div>
                <strong>Build an adaptive plan</strong>
                <p>
                  Your study schedule changes as
                  your performance changes.
                </p>
              </div>
            </div>

            <div className="feature-line">
              <span>03</span>
              <div>
                <strong>Prepare with confidence</strong>
                <p>
                  Track your progress and exam
                  readiness over time.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* FORM */}

        <div className="auth-card">

          <div className="auth-heading">

            <span>
              {mode === "login"
                ? "WELCOME BACK"
                : "GET STARTED"}
            </span>

            <h2>
              {mode === "login"
                ? "Sign in to StudyOS"
                : "Create your account"}
            </h2>

            <p>
              {mode === "login"
                ? "Continue where you left off."
                : "Start building your adaptive study plan."}
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {mode === "signup" && (
              <div className="auth-field">

                <label>Full name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Sarthak"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>
            )}


            <div className="auth-field">

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="auth-field">

              <label>Password</label>

              <div className="password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {mode === "login" && (
              <div className="auth-options">

                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <button type="button">
                  Forgot password?
                </button>

              </div>
            )}


            <button
              className="auth-submit"
              type="submit"
            >
              {mode === "login"
                ? "Sign in"
                : "Create account"}

              <ArrowRight size={17} />

            </button>

          </form>


          <div className="auth-switch">

            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() =>
                setMode(
                  mode === "login"
                    ? "signup"
                    : "login"
                )
              }
            >
              {mode === "login"
                ? "Create one"
                : "Sign in"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Auth;