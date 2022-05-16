import React from 'react';

const AbutUs = () => {
    return (
        <section className="mainAbout-body">
            <div className="mainAbout-content">
                <div className="title">
                    <h1>About us</h1>
                    <p>Investment packages are diversified among many currencies in order to build a reliable investment portfolio. Our specialists distribute assets in order to minimize risks and increase the income of each investor.</p>
                </div>
                <div className="aboutList-info">
                    <div className="aboutList-item">
                        <div className="info">
                            <h3>14056</h3>
                            <p>Number of clients</p>
                        </div>
                    </div>
                    <div className="aboutList-item">
                        <div className="info">
                            <h3>$12 million</h3>
                            <p>The total amount of deposits</p>
                        </div>
                    </div>
                    <div className="aboutList-item">
                        <div className="info">
                            <h3>$7 million</h3>
                            <p>Dividends paid to customers</p>
                        </div>
                    </div>
                    <div className="aboutList-item">
                        <div className="info">
                            <h3>50</h3>
                            <p>Coins in the investment portfolio</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AbutUs;