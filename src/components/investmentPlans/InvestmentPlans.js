import React from 'react';
import checkBox from "../../assets/img/package/checkBox.svg";
import investBanner from "../../assets/img/package/Investments.png";
import MainLayout from '../../layouts/mainLayout/MainLayout';
import MyInvestment from '../../modules/userDashboard/components/myInvestment/MyInvestment';

function InvestmentPlans() {
    
    return(
        <MainLayout title="Package">

            <section className="plansPage-body">
            <div className="banner-package">
                <div className="container">
                        <div className="row">
                        <div className="col-md-7">
                            <div className="text-package">
                                <img src={checkBox} alt="checkbox"/>
                                <h3>
                                Starting Investment from <span style={{color:"green"}}>4000</span> TK only
                                </h3>
                            </div>

                            <div className="text-package">
                                <img src={checkBox} alt="checkbox"/>
                                <h3>
                                Investing Period: <span style={{color:"green"}}>35</span> to <span style={{color:"green"}}>100 </span>Days
                                </h3>
                            </div>
                            <div className="text-package">
                                <img src={checkBox} alt="checkbox"/>
                                <h3>
                                Daily Target: <span style={{color:"green"}}>50-100 Tasks</span> (Watch Short Video & Filling Captcha)
                                </h3>
                            </div>
                            <div className="text-package">
                                <img src={checkBox} alt="checkbox"/>
                                <h3>
                                Can invest <span style={{color:"green"}}>1</span> or more investment package
                                </h3>
                            </div>
                            <div className="text-package">
                                <img src={checkBox} alt="checkbox"/>
                                <h3>
                                Easy Withdrawal from  <span style={{color:"green"}}>BINANCE</span>
                                </h3>
                            </div>

                            <div className="text-package">
                                <img src={checkBox} alt="checkbox"/>
                                <h3>
                                Get upto <span style={{color:"green"}}>15%</span>benefit of your Investment
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='investmentBnner__img'>
                                <img src={investBanner} alt="packageBanner"/>
                            </div>
                        </div>
                        </div>

                </div>
            </div>
            <div className="plansPage-content">
            <MyInvestment from="notLogged" />
            </div>
            </section>
        </MainLayout>

    )
}

export default InvestmentPlans
