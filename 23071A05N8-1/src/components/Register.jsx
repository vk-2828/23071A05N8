import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useUser } from '../contexts/UserContext'; // adjust the path as needed
import { useNavigate } from 'react-router-dom';
function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate=useNavigate()
  const { loginUser } = useUser(); // context method to save user

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);

    // Save the user in context
    loginUser({
      username: data.username,
      email: data.email,
      password: data.password,
    });

    setIsVerified(true);
    alert('Registration success');
    navigate('/login')
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4" style={{ width: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h4 className="text-center text-info mb-4">Registration Page</h4>

        {!isVerified ? (
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder="Enter your username"
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <div className="text-danger">{errors.username.message}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
              />
              {errors.email && <div className="text-danger">{errors.email.message}</div>}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <div className="text-danger">{errors.password.message}</div>}
            </div>

            {/* Submit */}
            <div className="d-grid">
              <button type="submit" className="btn btn-outline-success">Register</button>
            </div>
          </form>
        ) : (
          <div className="text-center text-success">
            ✅ Registration Successful!
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
