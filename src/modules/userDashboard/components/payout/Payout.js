import React from 'react';
import { Link } from 'react-router-dom';

const Payout = () => {
    return (
        <div className="content">
            <section className="main-content pt-0">

                <div className="page-title">
                    <h2>Withdraw</h2>
                </div>
                <div className='row'>
                    <div className="plansItem planWithdraw col-md-6">
                        <div className="investment_box_wrapper float_left">
                        <div className="investment_icon_circle">
                            <i className="flaticon-bar-chart"></i>
                        </div>
                        <div className="investment_border_wrapper"></div>
                        <div className="investment_content_wrapper">
                            <h1 >
                            <h3>Subscription Withdraw</h3>

                            {/* <Link to={`/user-dashboard/buy-package/${pack.id}`}>{names[0]}</Link> */}
                            </h1>
                            {/* <p>
                            <br /> Compound Available
                            <br /> Down to 5% for 20 Hourly
                            <br /> Principal Return
                            <br /> Up to 5% for 20 Hourly
                            </p> */}
                        </div>
                        <div className="about_btn plans_btn about_btnss">
                            <Link 
                            to={'/user-dashboard/subscription/withdraw'}
                            >Withdraw</Link>
                        </div>
                        </div>
                    </div>
                    <div className="plansItem planWithdraw col-md-6" >
                        <div className="investment_box_wrapper float_left">
                        <div className="investment_icon_circle">
                            <i className="flaticon-bar-chart"></i>
                        </div>
                        <div className="investment_border_wrapper"></div>
                        <div className="investment_content_wrapper">
                            <h1 >
                            <h3>Investment Withdraw</h3>

                            {/* <Link to={`/user-dashboard/buy-package/${pack.id}`}>{names[0]}</Link> */}
                            </h1>
                            {/* <p>
                         
                            <br /> Compound Available
                            <br /> Down to 5% for 20 Hourly
                            <br /> Principal Return
                            <br /> Up to 5% for 20 Hourly
                            </p> */}
                        </div>
                        <div className="about_btn plans_btn about_btnss">
                            <Link 
                            to={'/user-dashboard/invest/withdraw'}

                            >Withdraw</Link>
                        </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Payout;