import React from "react";
import "../../src/css/visioncdl.css";
import Section from "./ImgTherapy";
import ImgEval from "./ImgEval";
import ImgReading from "./ImgReading";

class Home extends React.Component {
  state = { count: 0 };

  countClicks = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log(this.state);
    // const count = this.state.count;

    return (
      <div className="containerMain">
        {/* Start Container (Home Section)  */}
        <div id="home" align="center" style={{ backgroundColor: "#fff" }}>
          <div className="row text-center">
            <div className="col-sm-3">
              <img
                src={require("../images/logos/VisionCNR_LOGO_web.jpg")}
                width="100%"
                alt="Logo VisionCNR"
              />
              <h3>Bellevue and Bothell, WA</h3>
            </div>
            <div className="col-sm-3">
              <ImgEval />
            </div>
            <br />
            <div className="col-sm-3">
              <Section />
            </div>
            <br />
            <div className="col-sm-3">
              <ImgReading />
            </div>
          </div>
          <br />
        </div>
        {/* END  Container (Home Section)  */}
        {/* <!-- Container (About Section) --> */}
        <div id="about" className="container-fluid bg-grey">
          <div className="titleMain">ABOUT OUR CLINIC</div>
          {/* <div onClick={this.countClicks}>
                    [ Click here to like our clinic ]
                </div>
                <h4>Total likes: {count} </h4> */}
          <div className="row">
            <div className="col-sm-12">
              <div className="body-text">
                Vision Clinics of Neuro-Optometric Rehabilitation in Bellevue
                and Bothell, WA offers Functional Vision Evaluations and Vision
                Therapy treatment services. We provide evaluation and treatment
                of visual skills dysfunctions, especially related to special
                needs, autism, learning disabilities, dyslexia, attention
                deficit, ADHD, and academic / vocational performance, reading,
                writing, dysgraphia, lazy eye, strabismus, and aquired brain
                injury. Clinic and / or home-based therapy and training
                solutions offered. Dr. Alan Pearson has more than 25 years of
                experience in functional vision and therapy.
                <br />
                <br />
                Vision is involved in most everything we do in life. Do you or
                your child struggle with school, work, attention, or the
                enjoyment of life? Consider how many hours of the day are spent
                working with books, papers, and computer screens. Visual skills
                are critical for the tremendous demands on focus, attention, and
                thinking that are needed for success today.
              </div>
            </div>
            
          </div>
        </div>
        {/* <!-- Container (Referrals Section) --> */}
        <div id="referrals" className="container-fluid text-center">
          <div className="titleMain">REFERRALS</div>
          <p>
            <a
              className="btn btn-success"
              href={require("../images/ReferralForm_2018.pdf")}
              alt="referral form"
            >
              Download our
              <br />
              <b>PROFESSIONAL REFERRAL FORM</b>
            </a>{" "}
          </p>
          <br />
          <div className="row text-left">
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-4">
                <h4 className="body-text" style={{ padding: 10 }}>
                  Many patients come to the Vision Clinic through a referral
                  from another professional. Those making referrals include:
                  Pediatricians, Medical Doctors, Eye Doctors (Optometrists &
                  Ophthalmologists), Occupational Therapists, Physical
                  Therapists, Speech Language Therapists, Psychologists,
                  Chiropractors, Educators (Teachers or School Nurses) and
                  others.
                </h4>
              </div>
              <div className="col-sm-4">
                <h4 className="body-text" style={{ padding: 10 }}>
                  It is not necessary to have a referral to schedule an
                  appointment with Dr. Pearson.{" "}
                </h4>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
        {/* <!-- Container (Pricing Section) --> */}
        <div id="insurance" className="container-fluid bg-grey">
          <div className="text-center">
            <div className="titleMain">INSURANCE</div>
            <h4 className="body-text">
              Some of our services may be covered by insurance
            </h4>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <div className="navTitle">Private Pay</div>
                </div>
                <div className="panel-body">
                  <br />
                  <p>
                    <strong>Monthly Tuition</strong>&nbsp;4 Sessions
                  </p>
                  <p>
                    <strong>Quarterly Tuition</strong>&nbsp;12 Sessions
                  </p>
                  <p>
                    <strong>Yearly Tuition</strong>&nbsp;42 Sessions
                  </p>
                  <p>
                    <strong>Custom Programs</strong>&nbsp;Various
                  </p>
                </div>
                <div className="panel-footer">
                  <h5>PREPAID</h5>
                  <h4 className="body-text">Payment plans available</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <div className="navTitle">Insurance Based</div>
                </div>
                <div className="panel-body">
                  <br />
                  <p>
                    <strong>Premera - </strong> Out of Network
                  </p>
                  <p>
                    <strong>Regence - </strong> In Network
                  </p>
                  <p>
                    <strong>Molina - </strong> In Network
                  </p>
                  <p>
                    <strong>United Healthcare - </strong> In Network
                  </p>
                  <p>
                    <strong>Aetna and Cigna - </strong> Out of Network
                  </p>
                </div>
                <div className="panel-footer">
                  <h5>MEDICAL PROCEDURES ONLY</h5>
                  <h4 className="body-text">Billed to Insurance first</h4>
                  <h4 className="body-text">
                    Subject to Copays, Deductibles, and Coinsurance
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <div className="navTitle">Combination</div>
                </div>
                <div className="panel-body">
                  <br />
                  <p>
                    <strong>Medical Ins. - </strong> for medical procedures only
                  </p>
                  <p>
                    <strong>Private Pay - </strong> for non-medical procedures
                  </p>
                  <p>
                    <strong>Private Pay - </strong> for non-covered procedrues
                  </p>
                </div>
                <div className="panel-footer">
                  <h5>PREPAID</h5>
                  <h4 className="body-text">for non-medical procedrues</h4>
                  <h4 className="body-text">for non-covered procedrues</h4>
                  <h5>COVERED MEDICAL</h5>
                  <h4 className="body-text">billed to insurance plan</h4>
                  <h4 className="body-text">
                    Subject to Copays, Deductibles, and Coinsurance
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
