import React, { useEffect, useReducer } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Constants from "../../utils/constants";
import AuthServices from "../api/AuthServices";
import PackageServices from "../api/PackageServices";

const OurPlaneCard = () => {

  const [state, setstate] = useReducer((state,newState)=>({...state,...newState}),{
   packages:"",
   myPackages:"",
      boughtPackage:"",
   isLoading:true
})

// const {authe}
let { authenticated } = useAuth();

  const getPackages = async()=>{
      let res = await PackageServices.packageList();
      setstate({isLoading:false})
      // console.log('res',res);
      if(res.data){
        setstate({packages:res.data})
      }
  }

  const getMyCurrentInvest = async () => {
    // let res = await PackageServices.history();
    let res = await AuthServices.user();
    // console.log("res2.data.package_title", res.data.package_title);
    // setstate({ myPackages: res.data.package_title || "" });

    // console.log(`resge`, res.data);
    // let buyPackage = res.data.filter(
    //   (myPackages) => myPackages.status === Constants.BUY_PACKAGE_STATUS_APPROVE
    // )
    // console.log('first', buyPackage);
    // if(res.data.status === Constants.BUY_PACKAGE_STATUS_APPROVE) setstate({package:res.data.package_name})
    setstate({
      // boughtPackage: buyPackage||""

      boughtPackage: res?.data?.package_title||""
    
    });
  };

  useEffect(() => {
    getPackages();
    getMyCurrentInvest();
  }, []);

  console.log('state.', state.boughtPackage);
  let packages = "";
  if(state.packages){
    let packnameBuyOption = Constants.BUY_NOW
      packages = state.packages.map(pack=>{

        // if(state.boughtPackage.length){

          // let packageBought = state.boughtPackage.filter(packages=> packages.package_name == pack.name) ||"";
          // console.log('packageBought', packageBought);
           packnameBuyOption = state.boughtPackage === "No Active Package" ? Constants.BUY_NOW : state.boughtPackage === pack.name  ?  "Current Package" :" Upgrade";
        // }
        let names = pack.name.split(" ");
        // console.log(`names`, pack)
        
        return(<>
        
                  <div className="plansItem" >
                    <div className="investment_box_wrapper float_left">
                      <div className="investment_icon_circle">
                        <i className="flaticon-bar-chart"></i>
                      </div>
                      <div className="investment_border_wrapper"></div>
                      <div className="investment_content_wrapper">
                        <h1 >
                          <Link to={`/user-dashboard/buy-package/${pack.id}`}>{names[0]}</Link>
                        </h1>
                        <p>
                          {pack.cost}
                          <br /> Compound Available
                          <br /> Daily self-income up to {names[0] == "Regular"?"50":names[0]=="Bronze"?"95":names[0]=="Silver"?"155":names[0]=="Gold"?"200":names[0]=="Platinum"?"275":names[0]=="Titanium"?"380":0} tk
                          <br /> REFERRAL Earn: 1%
                          <br /> 200 days Validity
                        </p>
                      </div>
                      <div className="about_btn plans_btn">
                        <Link to={packnameBuyOption === "Current Package" ?"/user-dashboard/buy-package":`/user-dashboard/buy-package/${pack.id}`}>{packnameBuyOption}</Link>
                      </div>
                    </div>
                 </div>
               </>
        )
      })
  }

  if(state.isLoading == true){
    return <div className='loader'>
             <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                  // timeout={3000} //3 secs
                />

    </div> 
  }

  return (
    <>
      <div className="page-title mb-5">
          {/* <h2 className="text-center">My Investments</h2> */}
        </div>
        {/* {myPackages} */}
     

      <div className="plans-content">
        {packages}
      </div>
    
    </>
  );
};

export default OurPlaneCard;
