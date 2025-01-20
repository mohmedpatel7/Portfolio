import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

export default function Resume() {
  return (
    <>
      <div className=" mt-4">
        {/* Content */}
        <div>
          <div className="resume-section">
            <h2>Resume</h2>
            <div className="ms-3">
              <h3 className="mt-4">Education</h3>
              <hr className="text w-100 mt-3" style={{ height: "5px" }} />
              <h4>Bachelor of Computer Applications (BCA)</h4>
              <p className="mb-1">
                Veer Narmad South Gujarat University (MKICS College)
              </p>
              <p>Expected Graduation: May 2025</p>

              <h3 className="mt-5">Experience</h3>
              <hr className="text w-100 mt-3" style={{ height: "5px" }} />
              <p>
                Position: MERN Stack Developer Intern <br />
                Institute: Unified Mentor <br />
                Duration: December 15, 2024 – January 15, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
