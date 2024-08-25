import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log("Submitting login data:", data); // Debug: Check the payload being sent

      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await response.json();
      } catch (error) {
        const text = await response.text();
        console.error("Response is not JSON:", text);
        setError("form", { type: "manual", message: "An error occurred: " + text });
        return;
      }

      if (response.ok) {
        setMessage("Login successful. Redirecting to dashboard...");

        const accessToken = result.access_token;
        if (!accessToken) {
          setError("form", { type: "manual", message: "Token not found in response" });
          return;
        }

        localStorage.setItem("token", accessToken);

        let decodedToken;
        try {
          decodedToken = jwtDecode(accessToken);
          console.log("Decoded token:", decodedToken); // Debug: Inspect the decoded token
        } catch (decodeError) {
          console.error("Error decoding token:", decodeError);
          setError("form", { type: "manual", message: "Invalid token" });
          return;
        }

        const userId = decodedToken.userId; // Ensure this matches the token structure from FastAPI
        localStorage.setItem("userId", userId);

        try {
          const userResponse = await fetch(`http://127.0.0.1:8000/users/${userId}`);
          if (!userResponse.ok) {
            throw new Error("User data fetch failed");
          }
          const userData = await userResponse.json();
          localStorage.setItem("user", JSON.stringify(userData));
        } catch (userError) {
          console.error("Error fetching user data:", userError);
          setError("form", { type: "manual", message: "An error occurred while fetching user data" });
          return;
        }

        sessionStorage.clear();
        navigate("/dashboard");
      } else {
        setError("form", { type: "manual", message: result.detail || "Login failed" });
      }
    } catch (error) {
      console.error("There was an error!", error);
      setError("form", { type: "manual", message: "An error occurred" });
    }
  };

  return (
    <>
      <div className="Register">
        <div className="RLcard">
          <h1>Login to Campus Cash</h1>
          <h3>
            Don't have an account yet? <Link to="/register">Sign-up!</Link>
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="registerform">
              <li>
                <label htmlFor="email" className="labels">Email:</label>
                <input
                  className={`inputel ${errors.email ? "error-border" : ""}`}
                  placeholder="Email"
                  type="text"
                  {...register("email", {
                    required: "This field is required",
                    minLength: { value: 5, message: "Minimum length is 5" },
                  })}
                />
                {errors.email && <p className="error-text">{errors.email.message}</p>}
              </li>
              <li>
                <label htmlFor="password" className="labels">Password:</label>
                <input
                  className={`inputel ${errors.password ? "error-border" : ""}`}
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: { value: 5, message: "Minimum length is 5" },
                  })}
                />
                {errors.password && <p className="error-text">{errors.password.message}</p>}
              </li>
              <li>
                <button type="submit" className="buttonel" disabled={isSubmitting}>
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </li>
              {errors.form && <p className="error-text">{errors.form.message}</p>}
              {message && <p className="success-text">{message}</p>}
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;