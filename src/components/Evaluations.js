import React from "react";
import ImgEval from "./ImgEval";

const Evaluations = props => {
  console.log(props);

  const listItems = [
    "Two eye coordination / Binocular Skills",
    "Lazy Eye, Eye Turns",
    "Focusing Skills Near and Far",
    "Eye Tracking / Eye Hand / Vision and Vestibular / Visual Motor Skills",
    "Integration of vision with other sensory and motor skills",
    "Visual Perception / Visual Information Processing / Cognitive and Thinking Skills",
    "Visual Attention / Vigilance / Comfort and Efficiency with near activities",
    "Visual Emotional / Awareness of Social Cues / Perceptual Anxieties / Behavioral Issues"
  ];

  const displayList = listItems.map(listItem => {
    return <li className="unordered">{listItem}</li>;
  });

  return (
    <div id="evaluations" className="container-fluid">
      <div className="titleMain">EVALUATIONS</div>
      <br />
      <div className="row">
        <div className="col-sm-4">
          {/* <img
                className="img-responsive img-rounded"
                src={require("../images/photos/IMG_girlsVT.jpg")}
                width="100%"
                alt="Functional Vision Evaluation"
              /> */}
          <ImgEval />
        </div>
        <div className="col-sm-8">
          <div className="body-text">
            <strong>FUNCTIONAL VISION EVALUATIONS:</strong>
            A Functional Vision Evaluation is different than an ordinary eye
            exam. A child that is struggling developmentally or academically, or
            a child that is receiving physical, occupational, or speech therapy
            should have a functional vision evaluation to assess vision issues
            that could be present.
            <br />
            <br />
            <strong>
              {" "}
              A functional vision evaluation looks at issues such as
            </strong>
            :<ul>{displayList}</ul>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Evaluations;
