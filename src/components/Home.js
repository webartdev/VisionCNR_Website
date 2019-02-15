import React from 'react';
//import Button from './Button';
import '../../src/css/visioncdl.css';
class Home extends React.Component {
    state = { count: 0 }




    countClicks = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        var image1 = new Image()
        image1.src = "images/slides/3D_Bg_FunctionalVEval.jpg"
        var image2 = new Image()
        image2.src = "images/slides/3D_Bg_VTherapy.jpg"
        var image3 = new Image()
        image3.src = "images/slides/3D_Bg_V-in-Reading.jpg"
        var image4 = new Image()
        image4.src = "images/slides/3D_Bg_V-Technology.jpg"

        console.log(this.state)
        const { count } = this.state
        return (
            <div className="containerMain">
                <span className="titleMain">Welcome</span>
                {/* <h1> Welcome</h1>
                <div onClick={this.countClicks}>
                    Click here to increment the counter
                    <b> {this.state.count}
                    </b>
                </div>
                <h4>You clicked {count} times</h4> */}

                {/* Start Container (Home Section)  */}
                <div id="home" align="left" style={{ backgroundColor: '#fff' }}>
                    <div className="row text-center">

                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="about_doctors.php">About<br />Our Clinic</a></h6>
                                <a href="about_doctors.php">
                                    <img alt="Dr. Alan P. Pearson" width="100%"
                                        height="100%" src={require("../images/photos/img_Dr.AlanPearson.jpg")} className="img-responsive"
                                        style={{ maxWidth: 300 }} />
                                </a>
                                <br /><br />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="#evaluations">Vision<br />Evaluations</a></h6>
                                <a href="#evaluations">
                                    <img alt="Functional Vision Evaluation" width="100%"
                                        height="100%" src={require("../images/photos/FunctionalVEval.jpg")} className="img-responsive" style={{ maxWidth: 300 }} />
                                </a>
                                <br /><br />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="#therapy">Vision<br />Therapy</a></h6>
                                <a href="#therapy">
                                    <img alt="Pediatric Vision Evaluation" width="100%"
                                        height="100%" src={require("../images/photos/PediatricVEval.jpg")} style={{ maxWidth: 300 }} />
                                </a>
                                <br /><br />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="tools.php">Vision<br />Technology</a></h6>
                                <a href="tools.php">
                                    <img alt="Vision Technology" width="100%"
                                        height="100%" src={require("../images/photos/VisionTechnology.jpg")} style={{ maxWidth: 300 }} />
                                </a>
                                <br /><br />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="reading.php">Vision-in-<br />Reading</a></h6>
                                <a href="reading.php">
                                    <img alt="Vision-in-Reading Evaluation" width="100%"
                                        height="100%" src={require("../images/photos/Vision-in-ReadingEval.jpg")} style={{ maxWidth: 300 }} />
                                </a>
                                <br /><br />
                            </div>
                        </div>

                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="appointment.php">Schedule Appointment</a></h6>
                                <a href="appointment.php">
                                    <img alt="Schedule Evaluation" width="100%"
                                        height="100%" src={require("../images/photos/schedule.jpg")} style={{ maxWidth: 300 }} />
                                </a>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* END  Container (Home Section)  */}
                {/* <!-- Container (About Section) --> */}
                <div class="container-fluid bg-grey">
                    <div class="row"> <h1 class="text-center">ABOUT OUR CLINIC</h1><br />
                        <div class="col-sm-8">
                            <h4>Vision Clinics of Development and Learning in Bellevue and Bothell, WA offers Functional
                            Vision Evaluations and Vision Therapy treatment services. We provide evaluation and treatment of
                            visual skills dysfunctions, especially related to special needs, autism, learning disabilities,
                            dyslexia, attention deficit, ADHD, and academic / vocational performance, reading, writing, dysgraphia,
                             lazy eye, strabismus, and aquired brain injury. Clinic and / or home-based therapy and training solutions offered.
                             Dr. Alan Pearson has more than 25 years of experience in functional vision and therapy.
       <br /><br />Vision is involved in most everything we do in life. Do you or your child struggle with school,
                                                                                   work, attention, or the enjoyment of life?
                                                                                   Consider how many hours of the day are spent working with books, papers, and computer screens.
                                                                                   Visual skills are critical for the tremendous demands on focus, attention, and thinking that are
                                                                                   needed for success today.
       </h4>

                            <h5><a class="btn btn-success" href="about_doctors.php" target="_blank">Learn more about Dr. Pearson</a></h5>

                        </div>
                        <div class="col-sm-4">
                            <a href="reading.php"><img class="img-responsive img-rounded" width="100%"
         src={require("../images/photos/btnLearnMoreAll.jpg")} alt="Learn More About" /></a>
                        </div>
                    </div>
                </div>

                <div id="evaluations" class="container-fluid">
                    <div class="row"><h1 class="text-center">EVALUATIONS</h1><br />
                        <div class="col-sm-4">
                            <img class="img-responsive img-rounded" src="images/IMG_girls%20in%20VT%20copy.jpg" />
                        </div>
                        <div class="col-sm-8">
                            <h4><strong>FUNCTIONAL VISION EVALUATIONS:</strong> A Functional Vision Evaluation is different than an ordinary eye exam. A child that is struggling developmentally or academically, or a child that is receiving physical, occupational, or speech therapy should have a functional vision evaluation to assess vision issues that could be present.</h4><br />
                            <a class="btn btn-success" href="evaluations.php">More Information about<br /><b>Functional Vision Evaluations</b> </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Container (Services Section) --> */}
                <div id="therapy" class="container-fluid text-center bg-grey">
                    <h1>THERAPY</h1>
                    <h4>What we offer</h4>
                    <br />
                    <div class="row">
                        <div class="col-sm-4">
                            <a href="visiontraining.php"><img src={require("../images/thumbs/thumb_swing.jpg")} alt="vision therapy" /></a>
                            <h4><a href="visiontraining.php">VISION THERAPY AND VISION TRAINING</a></h4>
                            <p>A full scope of vision training intervention techniques involving both medical procedures as well as skills enhancement techniques.</p>

                        </div>
                        <div class="col-sm-4">
                            <a href="visiontraining.php"><img src={require("../images/thumbs/thumb_flipperRotator.jpg")} alt="therapeutic procedures" /></a>
                            <h4><a href="visiontraining.php">THERAPEUTIC PROCEDURES</a></h4>
                            <p>Medically based best-practice procedures suitable for insurance coverage.</p>
                        </div>
                        <div class="col-sm-4">
                            <a href="educational.php"><img src={require("../images/thumbs/thumb_VisionInReading.jpg")} alt="programs"/></a>
                            <h4><a href="educational.php">EDUCATIONAL SERVICES</a></h4>
                            <p>iStar Reading Club to enhance reading foundations, fluency, & comprehension.</p>
                        </div>
                    </div>
                    <br /><br />
                    <div class="row">
                        <div class="col-sm-4">
                            <a href="atadistance.php"><img src={require("../images/thumbs/Thumb_therapyComputer.jpg")} alt="at-a-distance options" /></a>
                            <h4><a href="atadistance.php">AT-A-DISTANCE OPTIONS</a></h4>
                            <p>We can still help many patients who live far away.</p>
                        </div>
                        <div class="col-sm-4">
                            <a href="collaboration.php"><img src={require("../images/thumbs/thumb_emotional.jpg")} alt="professional collaboration"/></a>
                            <h4><a href="collaboration.php">INTERDISCIPLINARY COLLABORATION</a></h4>
                            <p>We can work with teams to suggest vision related goals and intervention techniques.</p>
                        </div>
                        <div class="col-sm-4">
                            <a href="tools.php"><img src={require("../images/thumbs/thumb_tools.jpg")} alt="tools"/></a>
                            <h4 style={{ color: '#303030' }}><a href="tools.php">TRADITIONAL and HIGH TECH TOOLS</a></h4>
                            <p>We use traditional vision therapy tools as well as new technologies such as Eye Gaze Tracking and Virtual Reality.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Container (Referrals Section) --> */}
                <div id="referrals" class="container-fluid text-center">
                    <h1>REFERRALS</h1><br />
                    <p><a class="btn btn-success" href="images/ReferralForm_2018.pdf" target="_blank">
                        Download our<br /><b>PROFESSIONAL REFERRAL FORM</b></a>  </p>
                    <br />

                    <div class="row text-left">
                        <div class="row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-4">
                                <h4 class="text-left">Many patients come to the Vision Clinic through a referral from another professional.  Those making referrals include:  Pediatricians, Medical Doctors, Eye Doctors (Optometrists & Ophthalmologists), Occupational Therapists, Physical Therapists, Speech Language Therapists, Psychologists, Chiropractors, Educators (Teachers or School Nurses) and others.</h4>
                            </div>
                            <div class="col-sm-4">
                                <h4 class="text-left">It is not necessary to have a referral to schedule an appointment with Dr. Pearson.  </h4>
                            </div>
                            <div class="col-sm-2"></div>
                        </div>
                    </div>
                </div>
                {/* <?require_once ('config/testimonials.php'); ?> */}
                {/* <!-- Container (Pricing Section) --> */}
                <div id="insurance" class="container-fluid bg-grey">
                    <div class="text-center">
                        <h1>INSURANCE</h1>
                        <h4>Some of our services may be covered by insurance</h4>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-xs-12">
                            <div class="panel panel-default text-center">
                                <div class="panel-heading">
                                    <div class="navTitle">Private Pay</div>
                                </div>
                                <div class="panel-body">
                                    <p><strong>Monthly Tuition</strong>&nbsp;4 Sessions</p>
                                    <p><strong>Quarterly Tuition</strong>&nbsp;12 Sessions</p>
                                    <p><strong>Yearly Tuition</strong>&nbsp;42 Sessions</p>
                                    <p><strong>Custom Programs</strong>&nbsp;Various</p>
                                </div>
                                <div class="panel-footer">
                                    <h5>PREPAID</h5>
                                    <h4>Payment plans available</h4>
                                    <a href="insurance.php"><button class="btn btn-lg">More Info</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="panel panel-default text-center">
                                <div class="panel-heading">
                                    <div class="navTitle">Insurance Based</div>
                                </div>
                                <div class="panel-body">
                                    <p><strong>Premera - </strong> Out of Network</p>
                                    <p><strong>Regence - </strong> In Network</p>
                                    <p><strong>Molina - </strong> In Network</p>
                                    <p><strong>United Healthcare - </strong> In Network</p>
                                    <p><strong>Aetna and Cigna - </strong> Out of Network</p>
                                </div>
                                <div class="panel-footer">
                                    <h5>MEDICAL PROCEDURES ONLY</h5>
                                    <h4>Billed to Insurance first</h4>
                                    <h4>Subject to Copays, Deductibles, and Coinsurance</h4>
                                    <a href="insurance.php"><button class="btn btn-lg">More Info</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="panel panel-default text-center">
                                <div class="panel-heading">
                                    <div class="navTitle">Combination</div>
                                </div>
                                <div class="panel-body">
                                    <p><strong>Medical Ins. - </strong> for medical procedures only</p>
                                    <p><strong>Private Pay - </strong> for non-medical procedures</p>
                                    <p><strong>Private Pay - </strong> for non-covered procedrues</p>
                                </div>
                                <div class="panel-footer">
                                    <h5>PREPAID</h5>
                                    <h4>for non-medical procedrues</h4>
                                    <h4>for non-covered procedrues</h4>
                                    <h5>COVERED MEDICAL</h5>
                                    <h4>billed to insurance plan</h4>
                                    <h4>Subject to Copays, Deductibles, and Coinsurance</h4>
                                    <a href="insurance.php"><button class="btn btn-lg">More Info</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Container (Contact Section) --> */}
                <div id="contact" class="container-fluid">
                    <h1 class="text-center">LOCATIONS and CONTACT</h1> <br />
                    <div class="row">
                        <div class="col-sm-5">
                            <p><span class="glyphicon glyphicon-phone"></span><strong>: 425-213-1016 - for all clinics  </strong></p>
                            <p><strong> FAX:  425-949-4491</strong></p>
                            <p><span class="glyphicon glyphicon-envelope"></span> info@visioncdl.com</p>
                            <p><span class="glyphicon glyphicon-map-marker"></span> BELLEVUE<br />Executive Plaza<br />12835 Bel-Red Rd. STE 303, Bellevue, WA 98005</p>
                            <p>
                                <iframe frameborder="0" height="200" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2689.275845022955!2d-122.1685307!3d47.620768999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c57f1884831%3A0x935367d2af5eb202!2s12835+Bel-Red+Rd+%23303%2C+Bellevue%2C+WA+98005!5e0!3m2!1sen!2sus!4v1410475026903" />
                            </p>
                            <p><span class="glyphicon glyphicon-map-marker"></span> BOTHELL<br />Kaufman Medical Building<br />18920 Bothell Way NE STE 203, Bothell, WA 98011</p>
                            <p>
                                <iframe frameborder="0" height="200" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2681.821147446864!2d-122.20868200000001!3d47.7655234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900e43cdb3166b%3A0x358fe902fcf91bfa!2s18920+NE+Bothell+Way+%23203%2C+Bothell%2C+WA+98011!5e0!3m2!1sen!2sus!4v1410475103425"></iframe>
                            </p>
                            <p></p>
                        </div>
                        <div class="col-sm-1"> </div>
                        <div class="col-sm-6">
                            <div class="imgBg text-center">
                                <h4><a href="appointment.php">Schedule Appointment</a></h4>
                                <a href="appointment.php"><img src="images/photos/schedule.jpg" style={{ maxWidth: 300 }} /></a>
                                <br /><br />
                                <a href="appointment.php"><div class="btn btn-success">Schedule</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </div >
        )
    }
}

export default Home;
