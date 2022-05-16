import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../../../components/api/AuthServices";
import InvestServices from "../../../../components/api/InvestServices";
import VideoServices from "../../../../components/api/VideoServices";

const Overview = () => {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      packages: "",
      myPackages: "",
      validity:0,
      isLoading: true,
      myInvest:"",
      user:"",
      watchVideoIncome:0,
      
    }
  );

  const getMyCurrentPackage = async () => {
    // let res = await PackageServices.history();
    let res = await AuthServices.user();
    // console.log(`res`, res2.data);
    setstate({ myPackages: res.data.package_title || ""  ,validity:res.data.validity || "" });
  };

  // const getMyCurrentPackage = async () => {
  //   let res = await AuthServices.user();
  //   console.log("res2.data.package_title", res.data.package_title);
  //   setstate({ myPackages: res.data.package_title || "" });
  // };

  const watchVideoIncome = async ()=>{
    let res = await VideoServices.incomeVideo();
    // console.log('res', res.data.data.video_watch_income);
    setstate({watchVideoIncome:res.data.data.video_watch_income})
  }
 

  const getRefer = async () => {
    let res = await AuthServices.user();
    // console.log(`resgetMyCurrentInvest`, res.data);
    setstate({ user: res.data , userPackage: res.data.package_title || ""});
  };

  const getMyCurrentInvest = async () => {
    let res = await InvestServices.history();
    // console.log(`resgetMyCurrentInvest`, res.data)
    setstate({ myInvest: res.data });
  };

  useEffect(() => {
    // getPackages();
    getMyCurrentPackage();
    getMyCurrentInvest();
    getRefer();
    watchVideoIncome();
  }, []);

  let packageList = "";

  if (state.myPackages ) {
    packageList = <div className="investment_content">
            <div className="d-flex justify-content-between fs">
              <div className="">
                <p>
                  Package:
                  <span>{state.myPackages}</span>
                </p>
              </div>
              <div className="">
                <p>
                  Validity:
                  <span>{state.validity < 0 ? 0 : state.validity }</span>
                </p>
              </div>
            </div>
          </div>

  }

  let myInvestments = "";

  if (state.myInvest) {
    myInvestments = state.myInvest
    .filter((myInvests) => myInvests.status !== "Invest Request Pending" && myInvests.withdraw_status !=2)
    .map((myInvests, index) => {
      console.log('myInvests', myInvests)
      return (
        <div className="investment_content">
          <div className="d-flex justify-content-between fs">
            <div className="">
              <p>
                 Name:
                <span>{myInvests.name}</span>
              </p>
            </div>
            <div className="">
              <p>
              Waiting time:
                <span>{myInvests.days_before_withdraw < 0 ? 0 : myInvests.days_before_withdraw }</span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="page-title">
        <h2>Overview</h2>
      </div>

      <div className="home-section">
        <div className="item">
          <div className="wh-block">
            <div className="title-block line">
              <h3 className="ico02">Subsciption info</h3>
            </div>
            {packageList}
          </div>
        </div>
        <div className="item">
          <div className="wh-block">
            <div className="title-block line">
              <h3 className="ico02">Investment info</h3>
            </div>
            {myInvestments}
          </div>
        </div>
        <div className="item">
          <div className="wh-block">
            <div className="title-block line">
              <h3 className="ico02">My task info</h3>
            </div>
            <div className="home-referralInfo">
              <div className="item">
                <span>Earning</span>
                <p>{state.watchVideoIncome} tk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="wh-block">
            <div className="title-block line">
              <h3 className="ico02">Referrals info</h3>
            </div>
            <div className="home-referralInfo">
              <div className="item">
                <span>Referral profit</span>
                <p>{state?.user.referral_balance||"00"} tk</p>
              </div>
              <div className="item">   
                <span>Referrals</span>
                <p className="v2">{state?.user.count_referred_user}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item down">
          <div className="green-block">
            <p>Earn more with the best referral program</p>
            <Link to="/user-dashboard/refferals">More</Link>
          </div>
        </div>
      </div>

      {/* </div> */}
    </React.Fragment>
  );
};

export default Overview;
