import React from 'react';
import './FourServices.css';

const FourServices = (props) => {
    // distructuring object
    const { name, sub, img, salary } = props.aid;

    return (
        <div className="col col-lg-3">
            <div className="card-stuff text-center">
                <img src={img} className="card-img-top mx-auto mt-3" style={{ width: "220px", height: "320px" }} alt="" />
                <div className="mt-3">
                    <h5 className="card-title fw-bold">Name: {name}</h5>
                    <p className="card-text">{sub}</p>
                    <h5 className="card-text">Monthly: ${salary}</h5>
                    <br />
                    <button type="button" className="btn btn-success rounded mb-4">View Tutor</button>
                </div>
            </div>
        </div>
    );
};

export default FourServices;