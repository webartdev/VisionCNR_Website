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
                {/* <h1> Welcome</h1>
                <div onClick={this.countClicks}>
                    Click here to increment the counter
                    <b> {this.state.count}
                    </b>
                </div>
                <h4>You clicked {count} times</h4> */}

                {/* Start Container (Home Section)  */}
                <div id="home" align="center" style={{ backgroundColor: '#fff' }}>
                    <div className="row text-center">
                        <div className="col-sm-4">
                            <img src={require("../images/logos/VisionCNR_LOGO_web.jpg")} width="100%" alt="Logo VisionCNR" />
                        </div>
                        <div className="col-sm-8">
                            <br />
                            <div className="bold-text">Functional Vision Evaluations, <br />Vision Therapy, Vision Training,<br /> and Neuro-Optometric Rehabilitation and Treatment Services<br /> in Bellevue and Bothell, WA</div><br />
                        </div>

                        <br />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="imgBg text-center">
                                <h6><a href="#about">About<br />Our Clinic</a></h6>
                                <a href="#about">
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
                                <h6><a href="/appointments">Schedule Appointment</a></h6>
                                <a href="/appointments">
                                    <img alt="Schedule Evaluation" width="100%"
                                        height="100%" src={require("../images/photos/schedule.jpg")} style={{ maxWidth: 300 }} />
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
                {/* END  Container (Home Section)  */}
                {/* <!-- Container (About Section) --> */}
                <div id="about" className="container-fluid bg-grey">
                <div className="titleMain">ABOUT OUR CLINIC</div><br />
                    <div className="row"> 
                        <div className="col-sm-8">
                            <div className="body-text">Vision Clinics of Development and Learning in Bellevue and Bothell, WA offers Functional
                            Vision Evaluations and Vision Therapy treatment services. We provide evaluation and treatment of
                            visual skills dysfunctions, especially related to special needs, autism, learning disabilities,
                            dyslexia, attention deficit, ADHD, and academic / vocational performance, reading, writing, dysgraphia,
                             lazy eye, strabismus, and aquired brain injury. Clinic and / or home-based therapy and training solutions offered.
                             Dr. Alan Pearson has more than 25 years of experience in functional vision and therapy.
       <br /><br />Vision is involved in most everything we do in life. Do you or your child struggle with school,
                                                          work, attention, or the enjoyment of life?
                                                         Consider how many hours of the day are spent working with books, papers, and computer screens.
                         Visual skills are critical for the tremendous demands on focus, attention, and thinking that are
       needed for success today.</div>
                        </div>
                        <div className="col-sm-4">
                            <a href="reading.php"><img className="img-responsive img-rounded" width="100%"
                                src={require("../images/photos/btnLearnMoreAll.jpg")} alt="Learn More About" /></a>
                        </div>
                    </div>
                </div>

                <div id="evaluations" className="container-fluid">
                <div className="titleMain">EVALUATIONS</div><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-responsive img-rounded" 
                            src={require("../images/photos/IMG_girlsVT.jpg")} width="100%" alt="Functional Vision Evaluation"/>
                        </div>
                        <div className="col-sm-8">
                        <div className="body-text"><strong>FUNCTIONAL VISION EVALUATIONS:</strong> 
                        A Functional Vision Evaluation is different than an ordinary eye exam.
                         A child that is struggling developmentally or academically, or a child 
                         that is receiving physical, occupational, or speech therapy should have a 
                         functional vision evaluation to assess vision issues that could be present.
                         <br/><br/>
                        <strong> A functional vision evaluation looks at issues such as</strong>:
                         <ul>
                             <li>Two eye coordination / Binocular Skills</li>
                             <li>Lazy Eye, Eye Turns</li>
                             <li>Focusing Skills Near and Far</li>
                             <li>Eye Tracking / Eye Hand / Vision and Vestibular / Visual Motor Skills</li>
                             <li>Integration of vision with other sensory and motor skills</li>
                             <li>Visual Perception / Visual Information Processing / Cognitive and Thinking Skills</li>
                             <li>Visual Attention / Vigilance / Comfort and Efficiency with near activities</li>
                             <li>Visual Emotional / Awareness of Social Cues / Perceptual Anxieties / Behavioral Issues</li>
                         </ul>
                         
                         </div><br />
                           
                        </div>

                    </div>
                </div>

                {/* <!-- Container (Services Section) --> */}
                <div id="therapy" className="container-fluid text-center bg-grey">
                <div className="titleMain">THERAPY</div>
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={require("../images/thumbs/thumb_swing.jpg")} alt="vision therapy" />
                            <div className="titleNav"><strong>VISION THERAPY AND VISION TRAINING</strong></div>
                            <div>A full scope of vision training intervention techniques involving both medical procedures as well as skills enhancement techniques.</div>

                        </div>
                        <div className="col-sm-4">
                            <img src={require("../images/thumbs/thumb_flipperRotator.jpg")} alt="therapeutic procedures" />
                            <div className="titleNav"><strong>THERAPEUTIC PROCEDURES</strong></div>
                            <p>Medically based best-practice procedures suitable for insurance coverage.</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={require("../images/thumbs/thumb_VisionInReading.jpg")} alt="programs" />
                            <div className="titleNav"><strong>EDUCATIONAL SERVICES</strong></div>
                            <p>iStar Reading Club to enhance reading foundations, fluency, and comprehension.</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={require("../images/thumbs/Thumb_therapyComputer.jpg")} alt="at-a-distance options" />
                            <div className="titleNav"><strong>AT-A-DISTANCE OPTIONS</strong></div>
                            <p>We can still help many patients who live far away.</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={require("../images/thumbs/thumb_emotional.jpg")} alt="professional collaboration" />
                            <div className="titleNav"><strong>INTERDISCIPLINARY COLLABORATION</strong></div>
                            <p>We can work with teams to suggest vision related goals and intervention techniques.</p>
                        </div>
                        <div className="col-sm-4">
                    <img src={require("../images/thumbs/thumb_tools.jpg")} alt="tools" />
                            <div className="titleNav"><strong>TRADITIONAL and HIGH TECH TOOLS</strong></div>
                            <p>We use traditional vision therapy tools as well as new technologies such as Eye Gaze Tracking and Virtual Reality.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Container (Referrals Section) --> */}
                <div id="referrals" className="container-fluid text-center">
                <div className="titleMain">REFERRALS</div><br />
                    <p><a className="btn btn-success" href="images/ReferralForm_2018.pdf" target="_blank">
                        Download our<br /><b>PROFESSIONAL REFERRAL FORM</b></a>  </p>
                    <br />
                    <div className="row text-left">
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                                <h4 className="text-left">Many patients come to the Vision Clinic through a referral from another professional.  Those making referrals include:  Pediatricians, Medical Doctors, Eye Doctors (Optometrists & Ophthalmologists), Occupational Therapists, Physical Therapists, Speech Language Therapists, Psychologists, Chiropractors, Educators (Teachers or School Nurses) and others.</h4>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="text-left">It is not necessary to have a referral to schedule an appointment with Dr. Pearson.  </h4>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </div>
                {/* <?require_once ('config/testimonials.php'); ?> */}
                {/* <!-- Container (Pricing Section) --> */}
                <div id="insurance" className="container-fluid bg-grey">
                    <div className="text-center">
                    <div className="titleMain">INSURANCE</div>
                        <h4>Some of our services may be covered by insurance</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default text-center">
                                <div className="panel-heading">
                                    <div className="navTitle">Private Pay</div>
                                </div>
                                <div className="panel-body">
                                    <p><strong>Monthly Tuition</strong>&nbsp;4 Sessions</p>
                                    <p><strong>Quarterly Tuition</strong>&nbsp;12 Sessions</p>
                                    <p><strong>Yearly Tuition</strong>&nbsp;42 Sessions</p>
                                    <p><strong>Custom Programs</strong>&nbsp;Various</p>
                                </div>
                                <div className="panel-footer">
                                    <h5>PREPAID</h5>
                                    <h4>Payment plans available</h4>
                                    <a href="insurance.php"><button className="btn btn-lg">More Info</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default text-center">
                                <div className="panel-heading">
                                    <div className="navTitle">Insurance Based</div>
                                </div>
                                <div className="panel-body">
                                    <p><strong>Premera - </strong> Out of Network</p>
                                    <p><strong>Regence - </strong> In Network</p>
                                    <p><strong>Molina - </strong> In Network</p>
                                    <p><strong>United Healthcare - </strong> In Network</p>
                                    <p><strong>Aetna and Cigna - </strong> Out of Network</p>
                                </div>
                                <div className="panel-footer">
                                    <h5>MEDICAL PROCEDURES ONLY</h5>
                                    <h4>Billed to Insurance first</h4>
                                    <h4>Subject to Copays, Deductibles, and Coinsurance</h4>
                                    <a href="insurance.php"><button className="btn btn-lg">More Info</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default text-center">
                                <div className="panel-heading">
                                    <div className="navTitle">Combination</div>
                                </div>
                                <div className="panel-body">
                                    <p><strong>Medical Ins. - </strong> for medical procedures only</p>
                                    <p><strong>Private Pay - </strong> for non-medical procedures</p>
                                    <p><strong>Private Pay - </strong> for non-covered procedrues</p>
                                </div>
                                <div className="panel-footer">
                                    <h5>PREPAID</h5>
                                    <h4>for non-medical procedrues</h4>
                                    <h4>for non-covered procedrues</h4>
                                    <h5>COVERED MEDICAL</h5>
                                    <h4>billed to insurance plan</h4>
                                    <h4>Subject to Copays, Deductibles, and Coinsurance</h4>
                                    <a href="insurance.php"><button className="btn btn-lg">More Info</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Home;
