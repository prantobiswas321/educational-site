import React from 'react';

const Tutor = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-lg-2 g-5 my-5">
                    <div className="col">
                        <div>
                            <small>Tutor with the Best!</small>
                            <h2 className="fw-bold">Become a tutor.</h2>
                            <p>Private tutoring is not always effective in raising academic achievement; and in some schools students commonly skip classes or sleep through lessons because they are tired after excessive external study. This means that the shadow system can make regular schooling less efficient.

                                Teachers who spend more time focusing on private lessons than regular classes can cause greater inefficiencies in the mainstream school system. Situations in which teachers provide extra private lessons for pupils for whom they are already responsible in the public system can lead to corruption.</p>
                            <button type="button" className="btn btn-primary">Apply now</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-4">
                            <h2 className="fw-bold">Skill Requirements</h2>
                            <ul className="mt-3">
                                <li>Knowledge of subject matter</li>
                                <li>Ability to effectively communicate subject matter</li>
                                <li>Application of different learning strategies including active learning and peer-to-peer techniques
                                </li>
                                <li>Ability to listen and answer questions during tutoring sessions
                                </li>
                                <li>Set goals and/or expectations during the first few sessions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center my-4 pt-5">
                <h5>Call Us 888-000-999</h5>
                <h1>Questions About Hiring?</h1>
                <p><small>Our staff can help you with the process of becoming a tutor</small></p>
                <button type="button" className="btn btn-primary">SET AN INTERVIEW</button>
            </div>
        </div>
    );
};

export default Tutor;