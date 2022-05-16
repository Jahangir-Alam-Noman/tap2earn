import React, { useEffect, useReducer } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import InvestServices from "../../../../components/api/InvestServices";
import { useAuth } from "../../../../context/auth";

const MyInvestment = ({ from }) => {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      investments: "",
      isLoading: true,
      myInvest: "",
    }
  );
  let {authenticated} = useAuth();
  // console.log('auth', auth);
  const getInvestments = async () => {
    let res = await InvestServices.list();
    setstate({ isLoading: false });
    console.log(`res`, res)
    if (res.data) {
      setstate({ investments: res.data });
    }
  };

  const getMyCurrentInvest = async () => {
    let res = await InvestServices.history();
    // console.log(`resgetMyCurrentInvest`, res.data)
    setstate({ myInvest: res.data });
  };

  useEffect(() => {
    getInvestments();
    getMyCurrentInvest();
  }, []);

  let investments = "";
  if (state.investments) {
    investments = state.investments.map((investment) => {
      return (
        <>
          <div className="plansItem">
            <div className="investment_box_wrapper float_left">
              <div className="investment_icon_circle">
                <i className="flaticon-bar-chart"></i>
              </div>
              <div className="investment_border_wrapper"></div>
              <div className="investment_content_wrapper">
                <h1>
                  <Link to={`/user-dashboard/investments/${investment.id}`}>
                    {investment.name}
                  </Link>
                </h1>
                <p>
                  {investment.amount}
                  <br /> Upto {investment.name == "BASIC"?"3":investment.name=="STANDARD"?"5":investment.name == "PROFESSIONAL"?"8":investment.name =="BUSINESS"?"10":investment.name=="ELITE"?"15":investment.name=="VIP"?"20":""}% Money Return
                  <br /> Deposit through Binance in USDT
                  <br /> Reinvestment Available
                  <br /> Profit Accrual {investment.name == "BASIC"?"35":investment.name=="STANDARD"?"35":investment.name == "PROFESSIONAL"?"65":investment.name =="BUSINESS"?"65":investment.name=="ELITE"?"95":investment.name=="VIP"?"90":""} days
                </p>
              </div>
              <div className="about_btn plans_btn">
                <Link to={`/user-dashboard/investment/${investment.id}`}>
                  Invest
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  let myInvestments = "";

  if (state.myInvest) {
    myInvestments = (
      <div className="plans-content">
        <div className="plansItem plansItem_myInvest">
          <div className="investment_box_wrapper float_left">
            <div className="investment_icon_circle">
              <i className="flaticon-bar-chart"></i>
            </div>
            <div className="investment_border_wrapper"></div>
            {state.myInvest
              .filter(
                (myInvests) => myInvests.status !== "Invest Request Pending" && parseInt(myInvests.withdraw_status) !== 2
              )
              .map((myInvests, index) => {
                //  console.log(`myInvests`, myInvests)
                return (
                  <div className="investment_content">
                    <div className="d-flex justify-content-between">
                      <div className="invest_list">
                        <p>
                          <span>{index + 1}:</span>Investment name:
                          {myInvests.name}
                        </p>
                      </div>
                      <div className="invest_list">
                        <p>Waiting time:{myInvests.days_before_withdraw < 0 ? 0 : myInvests.days_before_withdraw}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  if (state.isLoading == true) {
    return (
      <div className="loader">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }
  return (
    <React.Fragment>
      <>
        <div className="page-title mb-5 text-center">
          <h2>{authenticated ? "My" : "Our"} Investments</h2>
        </div>
        {myInvestments}
      </>

      <div className="page-title mb-5">
        <h2>{from ? "" : "Investment"}</h2>
      </div>

      {/* <div className="home-section"> */}
      <div className="plans-content">{investments}</div>
    </React.Fragment>
  );
};

export default MyInvestment;
