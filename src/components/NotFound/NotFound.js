import React from 'react';
import img from '../../images/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg';

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <img style={{ width: "550px", height: "550px" }} src={img} alt="" />
        </div>
    );
};

export default NotFound;