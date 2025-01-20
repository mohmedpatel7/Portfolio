import React from "react";
import "./style/style.css";

export default function About() {
  return (
    <>
      <div className=" mt-4">
        <div className="row justify-content-start">
          <div>
            <h3>About Me</h3>
            <p>
              Hello! My name is Mohmed I Patel, a passionate Full-Stack
              Developer specializing in the MERN stack (MongoDB, Express.js,
              React, and Node.js). I excel in designing and building responsive
              web applications, creating efficient back-end systems, and
              delivering dynamic front-end interfaces. I am committed to writing
              clean, maintainable code and implementing RESTful APIs to meet
              user needs and business goals. As a proactive problem solver and
              collaborative team player, I thrive in fast-paced environments.
              Beyond work, I explore new technologies, contribute to open-source
              projects, and stay updated with the latest web development trends.
            </p>
          </div>
          <div className="mt-3">
            <h3 className="mb-3">What I'm Doing</h3>
            <div className="card information">
              <div className="card-body">
                <h5>
                  <i
                    className="fa-solid fa-code me-2"
                    style={{ color: "#FFAA1D" }}
                  ></i>{" "}
                  Web Devlopment
                </h5>
                <p>
                  High-quality development of web app at the professional level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
