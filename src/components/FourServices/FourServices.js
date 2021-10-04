import React from 'react';

const FourServices = (props) => {
    const { name, sub, img, salary } = props.aid;
    console.log(props);
    return (
        <div className="col mt-4">
            <div className="card text-center">
                <img src={img} className="card-img-top mx-auto mt-3" style={{ width: "450px", height: "550px" }} alt="" />
                <div className="card-body">
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

export default FourServices;