import React from "react";
import "./CertificationInfo.css";
import scrum from "../img/scrum.jpg";
import uog from "../img/uoguelph.jpg";

function CertificationInfo() {
  return (
    <div className="certification-info">
      <div className="certification-section">
        <h2>Licenses &amp; Certifications</h2>
        <div className="certification-card">
          <img src={uog} alt="University of Guelph logo" />
          <div className="certification-details">
            <h3>Accessible Service Provision</h3>
            <p>University of Guelph</p>
            <p>Issued Aug 2016</p>
          </div>
        </div>
        <div className="certification-card">
          <img src={scrum} alt="Scrum Alliance logo" />
          <div className="certification-details">
            <h3>Scrum Master Certified (SMC)</h3>
            <p>Scrum Alliance</p>
          </div>
        </div>
      </div>
      <div className="award-section">
        <h2>Honors &amp; Awards</h2>
        <div className="certification-card">
          <div className="award-details">
            <h3>Thought For Food challenge scholarship</h3>
            <p>Issued by Thought For Food · May 2017</p>
            <p>Associated with University of Guelph</p>
          </div>
        </div>
        <div className="certification-card">
          <div className="award-details">
            <h3>Elevator Project Pitch Bursary</h3>
            <p>Issued by The Elevator Project · Jun 2016</p>
            <p>Associated with University of Guelph</p>
          </div>
        </div>
        <div className="certification-card">
          <div className="award-details">
            <h3>Deans Honor List</h3>
            <p>Issued by University of Guelph · Jan 2016</p>
            <p>Associated with University of Guelph</p>
            <p>Award for getting outstanding marks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export {CertificationInfo};
