import React from 'react';
import '../css/visioncdl.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Appointments = () => (
    <div className="containerMain">

        {/* <!-- Container (Contact Section) --> */}
        <div id="contact" className="container-fluid">
        <div className="titleMain">LOCATIONS and CONTACT</div> <br />
            <div className="row">
                <div className="col-sm-5">
                    <p><strong>PHONE: 425-213-1016 - for all clinics  </strong></p>
                    <p><strong> FAX:  425-949-4491</strong></p>
                    <p><strong>EMAIL: info@visioncdl.com</strong></p>
                    <p><span className="glyphicon glyphicon-map-marker"></span> <strong>BELLEVUE</strong><br />Executive Plaza<br />12835 Bel-Red Rd. STE 303, Bellevue, WA 98005</p>
                    <p>
                        <iframe frameborder="0" height="200" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2689.275845022955!2d-122.1685307!3d47.620768999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c57f1884831%3A0x935367d2af5eb202!2s12835+Bel-Red+Rd+%23303%2C+Bellevue%2C+WA+98005!5e0!3m2!1sen!2sus!4v1410475026903" />
                    </p>
                    <p><span className="glyphicon glyphicon-map-marker"></span> <strong>BOTHELL</strong><br />Kaufman Medical Building<br />18920 Bothell Way NE STE 203, Bothell, WA 98011</p>
                    <p>
                        <iframe frameborder="0" height="200" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2681.821147446864!2d-122.20868200000001!3d47.7655234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900e43cdb3166b%3A0x358fe902fcf91bfa!2s18920+NE+Bothell+Way+%23203%2C+Bothell%2C+WA+98011!5e0!3m2!1sen!2sus!4v1410475103425"></iframe>
                    </p>
                    <p></p>
                </div>
                <div className="col-sm-1"> </div>
                <div className="col-sm-6">
                    <div className="imgBg text-center">
                    <div className="body-text"><a href="appointment.php">Schedule Appointment</a></div>
                        <a href="appointment.php"><img src="images/photos/schedule.jpg" style={{ maxWidth: 300 }} /></a>
                        <br /><br />
                        <a href="appointment.php"><div className="btn btn-success">Schedule</div></a>
                    </div>
                </div>
            </div>
        </div>


    </div>
);

export default Appointments;