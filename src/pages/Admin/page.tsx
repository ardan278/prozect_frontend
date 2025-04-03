import React from "react";
import { Button } from "react-bootstrap";

const Admin: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-h-150 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "24rem" }}>
          <div className="d-flex justify-content-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-person-circle text-secondary"
              viewBox="0 0 16 16"
            >
              <path d="M13.468 12.37C12.282 11.226 10.482 10.5 8 10.5s-4.282.726-5.468 1.87A6.987 6.987 0 0 0 8 16a6.987 6.987 0 0 0 5.468-3.63z" />
              <path
                fillRule="evenodd"
                d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <Button variant="primary" className="w-100">
            Login
          </Button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Admin;
