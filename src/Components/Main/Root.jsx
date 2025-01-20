import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import img from "./style/profile.avif";
import Navbar from "./Navbar";
import About from "./About";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  const navigate = useNavigate();
  const location = useLocation();

  // Define the routes in order for swipe navigation
  const routes = ["/", "/projects", "/resume"];
  const currentIndex = routes.indexOf(location.pathname);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < routes.length - 1) {
        navigate(routes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(routes[currentIndex - 1]);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true, // Optional: For testing with a mouse
  });

  return (
    <div {...swipeHandlers}>
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
                    <div>{/* User details */}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Achievements */}
          <div className="col-md-8 col-12">
            <div
              className="card h-100 p-3 section position-relative"
              style={{ minHeight: "300px" }}
            >
              <div className="card-body">
                {/* Navbar for Desktop */}
                <div className="d-md-flex justify-content-end d-none">
                  <Navbar />
                </div>
                <div className="mb-4">
                  <Outlet />
                </div>
              </div>

              {/* Navbar for Mobile */}
              <div className="d-md-none nav-mb">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
