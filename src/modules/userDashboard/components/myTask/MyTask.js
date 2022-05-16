import React, { useEffect, useReducer } from "react";
// import watchVideo from "../../assets/img/watchVideo.jpeg";
import watchVideo from "../../../../assets/img/mytask.png";
import AuthServices from "../../../../components/api/AuthServices";
import PackageWIseModule from "./PackageWIseModule";


const MyTask = () => {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      packages: "",
      myPackages: "",
      isLoading: true,
      myInvest: "",
      user: "",
      name: "",
    }
  );

  const getMyCurrentPackage = async () => {
    let res = await AuthServices.user();
    // console.log("res2.data.package_title", res.data.package_title);
    setstate({ myPackages: res?.data?.package_title || "" });
  };

  
  useEffect(() => {
    getMyCurrentPackage();
  }, []);


  let packageFunctions = (package_name) => {
    setstate({
      name: package_name,
    });
  };
  console.log('state.name', state.name == "No Active Package")

  return (
    <React.Fragment>
      <div className="page-title">
        <h2>My Task</h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="item">
            <div className="wh-block default__hover">
              <div className="title-block line">
                <h3 className="problem_solving_bg">My Packages</h3>
              </div>
              <div className="home">
                <div className="">
                  {/* <span>Limit</span> */}
                  <p className="task_p">
                    <div className="">
                      <button
                        className="task_btn"
                        onClick={() => packageFunctions(state.myPackages)}
                      >
                        {state.myPackages}
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PackageWIseModule name={"hi"} /> */}
      {state.name  ? <PackageWIseModule name={state.name} /> : ""}
      <img src={watchVideo} alt="Banner" style={{width:"100%"}}/>
    </React.Fragment>
  );
};


export default MyTask;
