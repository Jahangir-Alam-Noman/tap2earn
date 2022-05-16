import React from "react";
import checkBox from "../../assets/img/package/checkBox.svg";
import packageBanner from '../../assets/img/package/packageBanner.svg';
import OurPlaneCard from "../ourPlans/OurPlaneCard";

const PackagePlan = () => {
  return (
    <section className="plansPage-body">
      <div className="banner-package">
          <div className="container">
                <div className="row">
                <div className="col-md-7">
                    <div className="text-package">
                        <img src={checkBox} alt="checkbox"/>
                        <h3>
                        Starting Package Price: <span style={{color:"green"}}>2500</span> TK only
                        </h3>
                    </div>

                    <div className="text-package">
                        <img src={checkBox} alt="checkbox"/>
                        <h3>
                        Package Period: <span style={{color:"green"}}>200</span> Days
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
                         <span style={{color:"green"}}>Renewable </span> Package
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
                        Return Upto <span style={{color:"green"}}>3x </span>of your Investment
                        </h3>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="investmentBnner__img">
                        <img src={packageBanner}  alt="packageBanner"/>
                    </div>
                </div>
                </div>

          </div>
      </div>
      <div className="plansPage-content">
        <OurPlaneCard />
      </div>
    </section>
  );
};

export default PackagePlan;
