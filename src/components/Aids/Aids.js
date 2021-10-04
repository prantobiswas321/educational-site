import React, { useEffect, useState } from 'react';
import Aid from '../Aid/Aid';

const Aids = () => {
    const [aids, setAids] = useState([]);

    // loading data from fakedata
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setAids(data))
    }, [])

    return (
        <div className="mx-2">
            <h2 className="fw-bold my-5 home-text text-center">Find Your Tutor</h2>
            {
                aids.length === 0
                    ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-3">
                        {
                            // mapping for display them
                            aids.map(aid => <Aid
                                key={aid.id}
                                aid={aid}
                            ></Aid>)
                        }
                    </div>
            }
        </div>
    );
};

export default Aids;