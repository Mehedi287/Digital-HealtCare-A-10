import React from 'react';
import "./Doctores.css";
const Doctores = () => {
    return (
        <>

            <div id="doctors" className="doctors mt-5 d-flex row container-fluid mx-auto">
                <h2 className="text-center align-items-center justify-content-center">Our Doctors</h2>
                <div className="col-md-3">
                    <img className="img-fluid m-2 rounded doctor" src="https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" alt="" />
                    <h3>Dr Amdadul Huck</h3>
                </div>
                <div className="col-md-3">
                    <img className="img-fluid m-2 rounded doctor" src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" alt="" />
                    <h3>Dr Kakuli</h3>
                </div>
                <div className="col-md-3 ">
                    <img className="img-fluid m-2 rounded doctor" src="https://image.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1" alt="" />
                    <h3>Dr Mahin Chandra</h3>
                </div>

                <div className="col-md-3">
                    <img className="img-fluid m-2 doctor" src="https://image.freepik.com/free-photo/smiling-doctor-asian-woman-with-arms-crossed-against-white-wall_231208-13143.jpg" alt="" />
                    <h3>Dr Shakila</h3>
                </div>

            </div>
        </>
    );
};

export default Doctores;