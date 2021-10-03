import React, { useEffect, useState } from 'react';
import Aid from '../Aid/Aid';

const Aids = () => {
    const [aids, setAids] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setAids(data))
    }, [])
    return (
        <div className="mx-2 mt-5">
            <h2 className="fw-bold mb-5">Find Your Tutor</h2>
            {
                aids.length === 0
                    ?
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {
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