import React from 'react';
import { useForm } from "react-hook-form";
import { useUser } from '../contexts/UserContext'; // update path as per your project
import { useNavigate } from 'react-router-dom';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate=useNavigate()
  const { user } = useUser(); // get stored user from context

  function onSubmit(data) {
    if (!user) {
      alert("No user found. Please register first.");
      return;
    }

    if (data.username === user.username && data.password === user.password) {
      alert("✅ Login successful!");
      navigate("/")

      // redirect or do something after login
    } else {
      alert("❌ Invalid username or password.");
    }
  }

  return (
    <div className="signin-container m-5">
      <main className="d-flex justify-content-center align-items-center">
        <div className="container p-4 bg-white shadow rounded" style={{ maxWidth: "400px" }}>
          <h4 className="text-center text-info">Login</h4>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-3">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-outline-success px-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login
