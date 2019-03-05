import React from "react";

const Therapy = props => {
  console.log(props);
  return (
    <div id="therapy" className="container-fluid text-center bg-grey">
      <div className="titleMain">THERAPY</div>
      <br />
      <div className="row">
        <div className="col-sm-4">
          <img
            src={require("../images/thumbs/thumb_swing.jpg")}
            alt="vision therapy"
          />
          <div className="titleNav">
            <strong>VISION THERAPY AND VISION TRAINING</strong>
          </div>
          <div>
            A full scope of vision training intervention techniques involving
            both medical procedures as well as skills enhancement techniques.
          </div>
        </div>
        <div className="col-sm-4">
          <img
            src={require("../images/thumbs/thumb_flipperRotator.jpg")}
            alt="therapeutic procedures"
          />
          <div className="titleNav">
            <strong>THERAPEUTIC PROCEDURES</strong>
          </div>
          <p>
            Medically based best-practice procedures suitable for insurance
            coverage.
          </p>
        </div>
        <div className="col-sm-4">
          <img
            src={require("../images/thumbs/thumb_VisionInReading.jpg")}
            alt="programs"
          />
          <div className="titleNav">
            <strong>EDUCATIONAL SERVICES</strong>
          </div>
          <p>
            iStar Reading Club to enhance reading foundations, fluency, and
            comprehension.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-sm-4">
          <img
            src={require("../images/thumbs/Thumb_therapyComputer.jpg")}
            alt="at-a-distance options"
          />
          <div className="titleNav">
            <strong>AT-A-DISTANCE OPTIONS</strong>
          </div>
          <p>We can still help many patients who live far away.</p>
        </div>
        <div className="col-sm-4">
          <img
            src={require("../images/thumbs/thumb_emotional.jpg")}
            alt="professional collaboration"
          />
          <div className="titleNav">
            <strong>INTERDISCIPLINARY COLLABORATION</strong>
          </div>
          <p>
            We can work with teams to suggest vision related goals and
            intervention techniques.
          </p>
        </div>
        <div className="col-sm-4">
          <img src={require("../images/thumbs/thumb_tools.jpg")} alt="tools" />
          <div className="titleNav">
            <strong>TRADITIONAL and HIGH TECH TOOLS</strong>
          </div>
          <p>
            We use traditional vision therapy tools as well as new technologies
            such as Eye Gaze Tracking and Virtual Reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
