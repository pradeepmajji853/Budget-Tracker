import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RLhead from "./RLhead";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();

      if (result.message === "Registration successful") {
        alert(result.message);

        // Store token and user information
        localStorage.setItem("token", result.access_token);

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/dashboard");  // Adjust the route based on your setup
        }, 2000); // 2-second delay
      } else {
        console.error("Registration error:", result.detail);
        setMessage(result.detail); // Display any error messages
      }
    } catch (error) {
      console.error("There was an error!", error);
      setMessage(error.message); // Display error messages
    }
  };

  return (
    <>
      <RLhead />
      <div className="Register">
        <div className="RLcard">
          <h1>Signup to Campus Cash</h1>
          <h3>
            Already have an account? <Link to="/login">Login here!</Link>
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="registerform">
              <div className="name-container">
                <li>
                  <label htmlFor="first_name" className="labels">
                    First Name:
                  </label>
                  <input
                    className={`inputel ${errors.first_name ? "error-border" : ""}`}
                    placeholder="First Name"
                    type="text"
                    {...register("first_name", {
                      required: { value: true, message: "This field is required" },
                    })}
                  />
                  {errors.first_name && (
                    <span className="error-icon" title={errors.first_name.message}>!</span>
                  )}
                  {errors.first_name && <p className="error-text">{errors.first_name.message}</p>}
                </li>
                <li>
                  <label htmlFor="last_name" className="labels">
                    Last Name:
                  </label>
                  <input
                    className={`inputel ${errors.last_name ? "error-border" : ""}`}
                    placeholder="Last Name"
                    type="text"
                    {...register("last_name", {
                      required: { value: true, message: "This field is required" },
                    })}
                  />
                  {errors.last_name && (
                    <span className="error-icon" title={errors.last_name.message}>!</span>
                  )}
                  {errors.last_name && <p className="error-text">{errors.last_name.message}</p>}
                </li>
              </div>
              <li>
                <label htmlFor="email" className="labels">
                  Email:
                </label>
                <input
                  className={`inputel ${errors.email ? "error-border" : ""}`}
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "This field is required" },
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  })}
                />
                {errors.email && (
                  <span className="error-icon" title={errors.email.message}>!</span>
                )}
                {errors.email && <p className="error-text">{errors.email.message}</p>}
              </li>
              <li>
                <label htmlFor="password" className="labels">
                  Password:
                </label>
                <input
                  className={`inputel ${errors.password ? "error-border" : ""}`}
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: { value: true, message: "This field is required" },
                    minLength: { value: 8, message: "Minimum length is 8" },
                  })}
                />
                {errors.password && (
                  <span className="error-icon" title={errors.password.message}>!</span>
                )}
                {errors.password && <p className="error-text">{errors.password.message}</p>}
              </li>
              <li>
                <label htmlFor="confirmPassword" className="labels">
                  Confirm Password:
                </label>
                <input
                  className={`inputel ${errors.confirmPassword ? "error-border" : ""}`}
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmPassword", {
                    required: { value: true, message: "This field is required" },
                    minLength: { value: 8, message: "Minimum length is 8" },
                    validate: (value) =>
                      value === getValues("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="error-icon" title={errors.confirmPassword.message}>!</span>
                )}
                {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
              </li>
              <li>
                <input
                  disabled={isSubmitting}
                  type="submit"
                  value="Sign-up to Campus Cash"
                  className="inputSub"
                />
              </li>
              <div>{isSubmitting && <p>Loading...</p>}</div>
              {message && <p className="error-text">{message}</p>}
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
