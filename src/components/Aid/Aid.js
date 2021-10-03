import React from 'react';

const Aid = (props) => {
    const { name, sub, img, salary } = props.aid;
    console.log(props.aid);
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top mx-auto mt-3 img-fluid" style={{ width: "450px", height: "550px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Name: {name}</h5>
                    <p className="card-text">{sub}</p>
                    <h5 className="card-text">Per month: ${salary}</h5>
                    <br />
                    <button type="button" className="btn btn-success rounded">View Tutor</button>
                </div>
            </div>
        </div>
    );
};

export default Aid;