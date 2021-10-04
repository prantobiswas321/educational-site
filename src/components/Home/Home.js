import React, { useEffect, useState } from 'react';
import FourServices from '../FourServices/FourServices';
import './Home.css';
// import img from '../../images/header.jpeg';

const Home = () => {
    const [aids, setAids] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setAids(data))
    }, [])
    const size = 4;
    const result = aids.slice(0, size);
    return (
        <div>
            <div className="home-bg home-text text-center p-5">
                <p className="fs-5">Personal & Online Tutor</p>
                <h1 className="fw-bolder">Time To Learn</h1>
            </div>
            {
                aids.length === 0
                    ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="mx-1 mt-4 row row-cols-1 row-cols-lg-3 g-3">
                        {
                            result.map(aid => <FourServices
                                key={aid.id}
                                aid={aid}
                            ></FourServices>)
                        }
                    </div>
            }
        </div>
    );
};

export default Home;