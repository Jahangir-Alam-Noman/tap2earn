import React from 'react';

const ReferralProgram = () => {
    return (
        <section className="referralPage-body">
            <div className="referralPage-title">
                <h1>Referral program</h1>
                <p>The referral level is indicated on the investment package and differs in the level of referral deductions from the purchases of the invited referral.</p>
            </div>
            <section className="rectangle-body referral-page">
                <div className="rectangle-figure"></div>
                <div className="referralSteps-content">
                    <div className="referralSteps-title">
                        <h2>simple steps to start earning</h2>
                    </div>
                    <div className="referralSteps-list">
                        <div className="item">
                            <div className="item-content ico01">
                                <h3>Sign up for free in minutes</h3>
                                <p>Complete the registration form</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-content ico02">
                                <h3>Choose your investment</h3>
                                <p>Choose a suitable investment package</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-content ico03">
                                <h3>Sit back and relax</h3>
                                <p>Look at the dynamics of investment growth. You can withdraw or replenish your investments at any time. Investing without problems!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ReferralProgram;