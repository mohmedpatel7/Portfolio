import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import img from "./style/profile.avif";

export default function Root() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <>
      <div className="container mt-4">
        <div className="row g-3">
          {/* Left Section: User Info */}
          <div className="col-md-4 col-12">
            <div
              className={`card p-3 d-flex flex-column align-items-center justify-content-center section ${
                showDetails ? "h-auto" : "h-100"
              }`}
              style={{
                minHeight: showDetails ? "auto" : "300px",
                transition: "all 0.3s ease",
              }}
            >
              <div className="card-body">
                <div className="d-flex flex-column flex-md-column align-items-center align-items-md-center">
                  <div className="d-flex flex-row flex-md-column align-items-center">
                    <img
                      src={img}
                      className="rounded-circle img-fluid"
                      style={{ width: "120px", height: "120px" }}
                      alt="Profile"
                    />
                    <div className="ms-3 text-start text-md-center">
                      <h5 className="card-title mt-3 name">Mohmed I Patel</h5>
                      <p className="card-text">
                        <span className="badge badge-role text-light px-3 py-2">
                          Full-Stack Developer
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn d-md-none mt-3"
                    onClick={toggleDetails}
                  >
                    {showDetails ? (
                      <i className="fas fa-chevron-up arraw"></i>
                    ) : (
                      <i className="fas fa-chevron-down arraw"></i>
                    )}
                  </button>

                  <hr className="text w-100 mt-3" style={{ height: "5px" }} />
                  {showDetails || window.innerWidth >= 768 ? (
                    <div>
                      <div className="row badge badge-details">
                        <div className="d-flex align-items-center mt-1 mb-1">
                          <strong className="badge badge-icons me-2">
                            <i className="fa-regular fa-envelope"></i>
                          </strong>
                          <a
                            href="mailto:mohmedwork709@gmail.com"
                            className="text-decoration-none text-light"
                          >
                            mohmedwork709@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="row badge badge-details mt-3">
                        <div className="d-flex align-items-center mt-1 mb-1">
                          <strong className="badge badge-icons me-2">
                            <i class="fa-brands fa-linkedin"></i>
                          </strong>
                          <a
                            href="https://www.linkedin.com/in/mohmed-patel-88a991268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-light"
                          >
                            Mohmed Patel
                          </a>
                        </div>
                      </div>

                      <div className="row badge badge-details mt-3">
                        <div className="d-flex align-items-center mt-1 mb-1">
                          <strong className="badge badge-icons me-2">
                            <i class="fa-brands fa-github"></i>
                          </strong>
                          <a
                            href="https://github.com/mohmedpatel7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-light"
                          >
                            mohmedpatel7
                          </a>
                        </div>
                      </div>

                      <div className="row badge badge-details mt-3">
                        <div className="d-flex align-items-center mt-1 mb-1">
                          <strong className="badge badge-icons me-2">
                            <i class="fa-solid fa-location-dot"></i>
                          </strong>
                          Bharuch, Gujarat, India
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Achievements */}
          <div className="col-md-8 col-12">
            <div
              className="card h-100 p-3 section"
              style={{ minHeight: "300px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Achievements</h5>
                <ul>
                  <li>
                    Developed a multi-platform application with React and
                    Node.js
                  </li>
                  <li>Awarded 'Best Developer' in 2024</li>
                  <li>Contributed to open-source projects on GitHub</li>
                  <li>Speaker at international tech conferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
