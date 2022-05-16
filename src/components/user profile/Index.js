import React, { useEffect, useReducer } from "react";
import swal from "sweetalert";
import { useAuth } from "../../context/auth";
import DashboardLayout from "../../layouts/dashboardLayout/DashboardLayout";
import AuthServices from "../api/AuthServices";
import PackageServices from "../api/PackageServices";

function Index() {
  const profile = useAuth();
  // console.log(`profile`, profile.currentUser.data.data);
  const profileData = profile.currentUser.data.data;

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      passwordInput: false,
      old_password: "",
      password: "",
      pacakage:"",
      minimum:""
    }
  );



  const getPackages = async () => {
    let res = await PackageServices.packageList();

    console.log('res',res.data);
    if (res.data) {
      setState({ packages: res.data });
    }
  };

  const watchVideoIncome = async () => {
    let res = await AuthServices.user();
    console.log("resasdfsda", res.data.package_title);
    setState({ pacakage: res.data.package_title });
  };

  useEffect(() => {
    getPackages();
    watchVideoIncome();
  }, []);

  let minimum = ""
  if(state.packages){

    minimum =state.packages.map(pack =>{
      if(pack.name === state.pacakage){
        return pack.minimum_withdraw_amount;
        // setState({minimum:pack.minimum_withdraw_amount})
        // console.log('pack', pack)
      }
   })
  }
  const passWordChange = (e) => {
    e.preventDefault();
    let inputData = {
      old_password: state.old_password,
      password: state.password,
    };

    let res = AuthServices.changePassword(inputData);
    if (res) {
      swal("Password changed!", "Your password has been changed.", "success");
    }
    // console.log(`res`, res)
    // console.log(`inputData`, inputData)
    setState({ passwordInput: false });
  };

  return (
    <div>
      <DashboardLayout>
        <section className="main-content" style={{ padding: "0px 0px" }}>
          <div className="page-title">
            <h2>User Profile</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="plansItem" style={{ marginButtom: "20px" }}>
                  <div className="investment_box_wrapper float_left">
                    <div className="investment_icon_circle">
                      <i className="flaticon-bar-chart"></i>
                    </div>
                    <div className="investment_border_wrapper"></div>
                    <div className="row" style={{ padding: "35px 0px" }}>
                      <div className="col-md-12">
                        {/* <div className="d-flex justify-content-between mb-3">
                          <h4
                            className="mb-3"
                            style={{ fontSize: "1rem", fontWeight: "700" }}
                          >
                            User Uid:
                          </h4>
                          <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                            {profileData.uid}
                          </h5>
                        </div> */}
                        <div className="d-flex justify-content-between mb-3">
                          <h4
                            className="mb-3"
                            style={{ fontSize: "1.3rem", fontWeight: "700" }}
                          >
                            Name:
                          </h4>
                          <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                            {profileData.name}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <h4
                            className="mb-3"
                            style={{ fontSize: "1.3rem", fontWeight: "700" }}
                          >
                            Email:
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            {profileData.email}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between">
                          <h4
                            className="mb-3"
                            style={{ fontSize: "1.3rem", fontWeight: "700" }}
                          >
                            Phone:
                          </h4>
                          <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                            {profileData.phone}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <h4
                            className="mb-3"
                            style={{ fontSize: "1.3rem", fontWeight: "700" }}
                          >
                            Joining_date:
                          </h4>
                          <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                            {profileData.joining_date}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <h4
                            className="mb-3"
                            style={{ fontSize: "1.3rem", fontWeight: "700" }}
                          >
                            Minimum Wallet Balance:
                          </h4>
                          <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                            {minimum ? minimum : "No Package"}
                          </h5>
                        </div>
                        <div className="mb-3">
                          {state.passwordInput ? (
                            <div className="btn__input">
                              <div className="input__password">
                                <input
                                  type="password"
                                  placeholder="Old Password"
                                  name="old_password"
                                  onChange={(e) =>
                                    setState({ old_password: e.target.value })
                                  }
                                />
                                <input
                                  type="password"
                                  name="password"
                                  placeholder="New password"
                                  onChange={(e) =>
                                    setState({ password: e.target.value })
                                  }
                                />
                              </div>
                              <button
                                className="btn__green__big"
                                style={{ marginTop: "17px" }}
                                onClick={passWordChange}
                              >
                                Submit
                              </button>
                            </div>
                          ) : (
                            <button
                              className="btn__green__big"
                              onClick={() => setState({ passwordInput: true })}
                            >
                              Change Password
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
}

export default Index;
