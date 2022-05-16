import React from 'react';
import { Link } from 'react-router-dom';

const OurTechnology = () => {
    
    return (
        <section className="aboutInfo-imgBody">
            <div className="aboutInfo-text3">
                <div className="left-info">
                    <h2>Our technology</h2>
                    <p>Investment packages are diversified among many currencies in order to build a reliable investment portfolio. Our specialists distribute assets in order to minimize risks and increase the income of each investor.</p>
                    <Link to="packages.php">Start investing</Link>
                </div>
                <div className="right-info">
                    <div className="right-infoItem">
                        1. We use the volatility of the market, allowing us to reap the most profits for the investors.
                        Knowledge and understanding of volatility is important to identify the minimum and maximum price for an asset. Volatility helps us make predictions and bets based on previous value fluctuations. The higher the volatility of an asset, the more you can earn - and in this the cryptocurrency has no competitors.
                    </div>
                    <div className="right-infoItem">
                        2. In-depth market analysis and balanced decisions play a key role in the trading process.
                    </div>
                    <div className="right-infoItem">
                        3. We also actively use the artificial intelligence system to collect and process a large amount of information.
                        Data - a valuable asset, and it becomes important not only to storage, but also the process of exchange. Such an AI system simplifies the storage of information and makes it easier and safer.
                        We are constantly working to improve the quality of the product and platform for our users.Thanks to the AI system, our company provides simple and passive income to our users. For TAP2EARN, the ability to detect and filter the required data while maintaining user privacy is very important.
                    </div>
                </div>
            </div>

            <div className="aboutInfo-text4">
                <div className="title">
                    <h2>Here’s how it works</h2>
                </div>
                <div className="block-item">
                    <div className="block-itemContent">
                        <div className="block-itemContentInfo ico01">
                            <h3>Sign up for in minutes</h3>
                            <p>To register, fill out the registration form and confirm your email.</p>
                        </div>
                    </div>
                    <div className="block-itemContent">
                        <div className="block-itemContentInfo ico02">
                            <h3>Choose your investments</h3>
                            <p>Select an investment service package that meets your need. Our platform provides you the best prices in real time.</p>
                        </div>
                    </div>
                    <div className="block-itemContent">
                        <div className="block-itemContentInfo ico03">
                            <h3>Get your profit</h3>
                            <p>Watch your invest profit grow. You can withdraw profit or buy new package at any time. It’s hassle free investing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTechnology;