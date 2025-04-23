// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-2">
      <div className="container-fluid d-flex justify-content-between">
        <Link to="/" className="navbar-brand fw-bold">LOGO</Link>
        
        <div className="d-flex gap-3">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/aboutpage" className="nav-link">About</Link>
          <Link to="/contactpage" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
