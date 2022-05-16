import React from 'react';
import { Link } from 'react-router-dom';

const AboutInfo = () => {
    return (
        <section className="aboutInfo-text1">
            <h2>Why choose TAP2EARN</h2>
            <p>When you work with our team, you are choosing dependability and safety. </p>
            <p>Our team monitors every market indicator using artificial intelligence. Which, in the end, leads to good results.</p>
            <Link to="/register">Start investing</Link>
        </section>
    );
};

export default AboutInfo;