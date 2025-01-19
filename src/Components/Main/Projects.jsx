import React from "react";
import "./style/style.css"; // Add custom styles if needed
import Chatapp from "./style/chatapp.png";
import Todo from "./style/Todo.png";
import Ebus from "./style/Ebus.png";
import Collage from "./style/collage.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Chat web application",
      description:
        "A real-time chat application with mern stack and Socket.IO.",
      image: Chatapp,
      github: "https://github.com/mohmedpatel7/Nimo-chat",
      demo: "https://chatapp-ylg4.onrender.com/",
    },
    {
      id: 2,
      title: "To-Do List web application",
      description:
        "A responsive To-do list with file upload platform built with MERN stack.",
      image: Todo,
      github: "https://github.com/mohmedpatel7/Enotes-TODO",
      demo: "https://enotes-frontend.onrender.com/",
    },
    {
      id: 3,
      title: "Ebus Location based system",
      description:
        "A responsive Ebus Location based system built with MERN stack.",
      image: Ebus,
      github: "https://github.com/mohmedpatel7/Ebus-system",
      demo: "https://ebus-1axp.onrender.com/",
    },
    {
      id: 4,
      title: "Collage management system",
      description:
        "A responsive Collage management system built with MERN stack.",
      image: Collage,
      github: "https://github.com/mohmedpatel7/Collage-management-system",
      demo: "https://collage-system.onrender.com/",
    },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-start mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-12" key={project.id}>
            <div className="card h-100 shadow-sm">
              {/* Card Image */}
              <div className="card-img-container">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
              </div>
              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong className="badge badge-icons">
                      {" "}
                      <i className="fa-brands fa-github"></i>
                    </strong>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong className="badge badge-icons">
                      <i className="fa-regular fa-eye"></i>
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
