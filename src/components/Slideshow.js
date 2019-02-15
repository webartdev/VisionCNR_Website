import React from 'react';
import '../css/visioncdl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const Slideshow = () => (
    <div >
    {/* Start Container (Home Section)  */}
  <div id="about" align="left" id="logo" className="container-fluid" style={{backgroundColor:'#efefef'}}>
        <div className="row text-center"> 
       
        </div>
<div className="row"> 
        <div className="col-sm-2">
         <div className="imgBg text-center">
           <h5><a href="about_doctors.php">About</a></h5>
           <a href="about_doctors.php">
            <img  alt="Dr. Alan P. Pearson" width="100%"
        height="100%" src={require("../images/photos/img_Dr.AlanPearson.jpg")} className="img-responsive" 
            style={{maxWidth:300}}/>
           </a>
          <br/><br/>
           <a href="about_doctors.php"><div width="100%" height="100%">READ MORE</div></a>
          </div>
        </div>
        <div className="col-sm-2">
         <div className="imgBg text-center">
           <h5><a href="#evaluations">Evaluations</a></h5>
           <a href="#evaluations">
           <img alt="Functional Vision Evaluation" width="100%"
        height="100%" src={require("../images/photos/FunctionalVEval.jpg")} className="img-responsive" style={{maxWidth:300}}/>
           </a>
               <br/><br/>
           <a href="#evaluations"><div width="100%" height="100%">READ MORE</div></a>
          </div>
        </div>
        <div className="col-sm-2">
         <div className="imgBg text-center">
           <h5><a href="#therapy">Vision Therapy</a></h5>
           <a href="#therapy">
           <img alt="Pediatric Vision Evaluation" width="100%"
        height="100%" src={require("../images/photos/PediatricVEval.jpg")} style={{maxWidth:300}}/>
           </a>
           <br/><br/>
           <a href="#therapy">
           <div width="100%" height="100%">
           READ MORE
           </div>
           </a>
          </div>
        </div> 
        <div className="col-sm-2">
          <div className="imgBg text-center">
           <h5><a href="tools.php">Vision Technology</a></h5>
           <a href="tools.php">
           <img alt="Vision Technology" width="100%"
        height="100%" src={require("../images/photos/VisionTechnology.jpg")} style={{maxWidth:300}}/>
           </a>
           <br/><br/>
           <a href="tools.php"><div width="100%" height="100%">READ MORE</div></a>
         </div>
        </div> 
        <div className="col-sm-2">
          <div className="imgBg text-center">
           <h5><a href="reading.php">Vision-in-Reading</a></h5>
           <a href="reading.php">
           <img alt="Vision-in-Reading Evaluation" width="100%"
        height="100%" src={require("../images/photos/Vision-in-ReadingEval.jpg")} style={{maxWidth:300}}/>
           </a>
           <br/><br/>
           <a href="reading.php">
           <div width="100%" height="100%">READ MORE</div></a>
           </div>
        </div> 
        
        <div className="col-sm-2">
         <div className="imgBg text-center">
           <h5><a href="appointment.php">Schedule Appointment</a></h5>
           <a href="appointment.php">
           <img alt="Schedule Evaluation" width="100%"
        height="100%" src={require("../images/photos/schedule.jpg")} style={{maxWidth:300}}/>
           </a>
           <br/><br/>
           <a href="appointment.php"><div width="100%" height="100%">Schedule</div></a>
          </div>
        </div> 
  </div>
</div>
 {/* END  Container (Home Section)  */}
    
    </div>
);

export default Slideshow;