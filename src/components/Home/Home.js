import React, { useEffect, useState } from 'react';
import FourServices from '../FourServices/FourServices';
import './Home.css';

const Home = () => {
    const [aids, setAids] = useState([]);

    // loading data from fake db
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setAids(data))
    }, [])

    // slicing for getting an array with 4 object
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
                    <div>
                        <h3 className="text-center mt-5 fw-bold home-text">Our Best Tutors</h3>
                        <div className="mx-1 mt-4 row row-cols-1 row-cols-lg-3 g-3">
                            {
                                // mapping for showing 4 objects in homepage
                                result.map(aid => <FourServices
                                    key={aid.id}
                                    aid={aid}
                                ></FourServices>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Home;