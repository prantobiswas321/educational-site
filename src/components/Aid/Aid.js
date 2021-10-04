import React from 'react';
import './Aid.css';

const Aid = (props) => {
    // distructuring object
    const { name, sub, img, salary } = props.aid;
    return (
        <div className="col">
            <div className="card-color text-center">
                <img src={img} className="card-img-top mx-auto mt-3" style={{ width: "300px", height: "400px" }} alt="" />
                <div className="mt-3">
                    <h5 className="card-title fw-bold">Name: {name}</h5>
                    <p className="card-text">{sub}</p>
                    <h5 className="card-text">Monthly: ${salary}</h5>
                    <br />
                    <button type="button" className="btn btn-success rounded">View Tutor</button>
                </div>
            </div>
        </div>
    );
};

export default Aid;