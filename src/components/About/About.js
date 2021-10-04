import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-center fw-bold mt-4">About us</h1>
            </div>
            <div className="container d-flex flex-column bd-highlight mb-3 mt-5">

                <h6 className="fw-bold">Quality Tutoring Services</h6>
                <h2 className='fw-bold'>Welcome to BrilliantBrain</h2>
                <br />
                <p>Here you will find the greatest teachers for your children. Education is the key to life success, and instructors have a long-lasting effect on their pupils' lives. As a result, we guarantee that our teachers provide the finest possible instruction. We're a group of social changemakers who went through our fair share of adolescent problems. We overcame, learned to flourish, and built lives that we can be proud of. We're now dedicated to reaching out to the next generation of young people who have yet to glimpse the light at the end of their tunnel.
                    Our goal is to accomplish two things. To begin, evidence-based coaching will be used to assist young people in navigating the particular obstacles of the adolescent to young adult transition. Second, loving adults and youth-serving professionals must be trained to do the same.
                    One coach at a time, our objective is to assist fill a support vacuum for struggling young people. Our audience's specific demands necessitate developmentally appropriate and research-based approach. To that aim, our coaching services incorporate relevant psychological theories and evidence-based models that have been modified for use in a coaching setting. Our information is updated on a regular basis to guarantee that our services are based on the most recent research.</p>
                <div className="p-2 bd-highlight my-4">
                    <h2 className="fw-bold">Why Research-based Matters</h2>
                    <p>Adolescent treatments with a solid research foundation that include personal and social skill-building activities significantly improve self-perceptions, school engagement, positive social behaviors, grades, and reduced problem behaviors, whereas those without a strong research base have limited benefits.</p>
                </div>
                <div className="p-2 bd-highlight">
                    <h2 className="fw-bold">Our Programs Emphasize</h2>
                    <ul>
                        <li>self- and others-awareness;</li>
                        <li>self-efficacy;</li>
                        <li>self-determination;</li>
                        <li>meaning, purpose, and goal-orientation;</li>
                        <li>proactive skill building;</li>
                        <li>flexibility, tolerance, and collaborative problem-solving.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;