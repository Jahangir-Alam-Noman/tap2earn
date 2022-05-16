import QRCode from "qrcode";
import React, { useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import main_banner from "../../assets/img/package/main-banner.png";
import DashboardLayout from "../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../utils/constants";
import PackageServices from "../api/PackageServices";
import FullPageSpinner from "../full-page-spinner";
function BuyingPackage() {
  let { id } = useParams();

  let history = useHistory();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      singlePackages: "",
      showForm: false,
      transaction_id: "",
      prove_document: "",
      package_id: "",
      mainBannner: false,
      walletAddress: "0x184372a68e0f511474690380b3e85714db0b8b4d",
      copied: false,
      src: "",
    }
  );

  const getSinglePackage = async () => {
    const res = await PackageServices.singlePackage(id);
    // console.log(`res`, res);
    if (res) {
      setState({
        singlePackage: res.data,
        package_id: res.data.id,
      });
    }
  };

  useEffect(() => {
    getSinglePackage();
    QRCode.toDataURL(state.walletAddress).then((data) => {
      setState({ src: data });
    });
  }, []);

  const copyToClipboard = (e) => {
    e.preventDefault();
    let inputValue = document.querySelector("#walletAddress");
    console.log("inputValue", inputValue.value);
    inputValue.select();
    document.execCommand("copy");
    setState({ copied: true });
  };
  const inputChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name == "prove_document") {
      value = target.files[0];
      setState({
        [name]: value,
      });
      var image = document.getElementById("output");
      image.classList.remove("d-none");
      image.src = URL.createObjectURL(event.target.files[0]);
    }
    setState({
      [name]: value,
    });
  };

  const inputSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      transaction_id: state.transaction_id,
      prove_document: state.prove_document,
      package_id: [state.package_id],
    };

    let formdata = new FormData();
    Object.keys(inputData).map((key) => {
      formdata.append(key, inputData[key]);
    });
    // console.log(`object`, formdata);

    const res = await PackageServices.store(formdata);
    // console.log(`redsfsdfsdfsds`, res.message);
    if (res.message === Constants.SUCCESS_MESSAGE_PACKAGE) {
      swal({
        icon: "success",
        text: Constants.SUCCESS_MESSAGE_PACKAGE,
        timer: 2000,
      });
      history.push("/user-dashboard/buy-package");
    } else {
      swal({
        icon: "error",
        text:
          res.message === Constants.INVALID_MESSAGE
            ? Constants.INVALID_MESSAGE
            : Constants.ERROR_MESSAGE_PACKAGE,
        timer: 2000,
      });
      // history.push("/user-dashboard/buy-package");
    }
  };

  return (
    <div>
      <DashboardLayout>
        {state.singlePackage ? (
          <section
            className="rectangle-body mrgB-v1"
            style={{ padding: "0px 0px" }}
          >
            <div className="container">
              <div className="buy-package-banner">
                <h3>HOW TO BUY A PACKAGE THROUGH BINANCE</h3>

                <ul>
                  <li>
                    <span>
                      In Binance, use a P2P transaction to convert the required
                      package's Bangladesh taka to US dollars.
                    </span>
                    <h5>
                      Mobile:
                      <a href="https://www.binance.com/en/support/faq/360039384951">
                        https://www.binance.com/en/support/faq/360039384951
                      </a>
                    </h5>

                    <h5>
                      Web:
                      <a href="https://www.binance.com/en/support/faq/360043832851">
                        https://www.binance.com/en/support/faq/360043832851
                      </a>
                    </h5>
                  </li>
                  <li>
                    <span>
                      Deposit the necessary Package Dollars into our Binance
                      account. Our Wallet address is provided below. Also you
                      can directly deposit by scan the QR Code.
                    </span>
                    <h5>
                      <a href="https://www.binance.com/en/support/faq/115003670492">
                        https://www.binance.com/en/support/faq/115003670492
                      </a>
                    </h5>
                  </li>
                  <li>
                    <span>
                      After transferring the necessary Dollars to our account,
                      take a screenshot of the transaction details page and copy
                      the transaction Id.
                    </span>
                  </li>
                  <li>
                    <span>
                      Paste the transaction Id into the needed transaction Id
                      form, then upload the screenshot into the picture upload
                      form, and then click submit.
                    </span>
                  </li>
                  <li>
                    <span>
                      After submitting the required fields, the administrator
                      will review and approve your access to our application.
                    </span>
                  </li>
                </ul>

                <div
                  className="banner_btn"
                  onClick={() => setState({ mainBannner: !state.mainBannner })}
                >
                  <button>
                    How to Deposit the dollars from BINANCE account to Tap2Earn
                    Account
                  </button>
                </div>
                {state.mainBannner ? (
                  <div className="row">
                    <div className="col-12">
                      <div className="main-banner-package">
                        <img src={main_banner} alt="main_banner" />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <h1
              style={{
                color: "#252525",
                fontSize: "48px",
                fontFamily: "sans-serif",
                fontWeight: "700",
                marginBottom: "60px",
                // marginLeft: "0.8rem",
                textAlign: "center",
              }}
            >
              {state.singlePackage.message}
            </h1>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="plansItem">
                    <div className="investment_box_wrapper float_left">
                      <div className="investment_icon_circle">
                        <i className="flaticon-bar-chart"></i>
                      </div>
                      <div className="investment_border_wrapper"></div>
                      <div className="row" style={{ padding: "35px 0px" }}>
                        <div className="col-md-6">
                          <div className="d-flex justify-content-between mb-3">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Package Name:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.name}
                            </h5>
                          </div>
                          <div className="d-flex justify-content-between mb-3">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Cost:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.cost}
                            </h5>
                          </div>
                          <div className="d-flex justify-content-between mb-3">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Minimum withdraw Amount:
                            </h4>
                            <h5 style={{ fontSize: "1rem" }}>
                              {state.singlePackage.minimum_withdraw_amount}
                            </h5>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Daily Task:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.tasks}
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex justify-content-between mb-3">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              First period per ad price:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.ads_period_1_price}
                            </h5>
                          </div>

                          <div className="d-flex justify-content-between mb-3">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Second period per ad price:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.ads_period_2_price}
                            </h5>
                          </div>

                          <div className="d-flex justify-content-between mb-3">
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Third period per ad price:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.ads_period_3_price}
                            </h5>
                          </div>
                          <div
                            className="mb-3"
                            className="d-flex justify-content-between "
                          >
                            <h4
                              className="mb-3"
                              style={{ fontSize: "1rem", fontWeight: "700" }}
                            >
                              Fourth period per ad price:
                            </h4>
                            <h5 className="mb-3" style={{ fontSize: "1rem" }}>
                              {state.singlePackage.ads_period_4_price}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="about_btn ">
                        <a
                          className="plans_btn"
                          style={{ float: "left" }}
                          onClick={() =>
                            setState({ showForm: !state.showForm })
                          }
                        >
                          Buy Package
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {state.showForm ? (
              <>
                <div className="item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="payout-formBody">
                          <form onSubmit={inputSubmit}>
                            <label>Wallet address:</label>
                            <div className="user-wallet">
                              <input
                                type="text"
                                id="walletAddress"
                                name="walletAddress"
                                required=""
                                value={state.walletAddress}
                                // onChange={inputChange}
                              />
                              <button
                                className="small"
                                onClick={copyToClipboard}
                              >
                                {state.copied ? "Copied" : "Copy"}
                              </button>
                            </div>
                            <img src={state.src} alt="QR" className="mb-4" />
                          </form>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="payout-formBody">
                          <div className="d-flex justify-content-between my-3">
                            <h4>Coin:</h4>
                            <h4 className="h4-body"> USDT</h4>
                          </div>
                          <div className="d-flex my-3  justify-content-between">
                            <h4>Network:</h4>
                            <h4 className="h4-body"> BEP20</h4>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h4 className="w-40">Wallet address:</h4>
                            
                          </div>
                          <h4 className="h4-body w-60 mt-3">
                              0x184372a68e0f511474690380b3e85714db0b8b4d
                            </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="mt-5 mb-3 text-center">Buy the Package</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="payout-formBody">
                          <form onSubmit={inputSubmit}>
                            <label>Enter transection id: </label>
                            <div className="user-wallet">
                              <input
                                type="text"
                                name="transaction_id"
                                required=""
                                id="wallet-value"
                                value={state.transaction_id}
                                onChange={inputChange}
                              />
                            </div>

                            <label>Prove Document: </label>
                            <div className="payout-amount">
                              <div className="field-amount">
                                <input
                                  type="file"
                                  name="prove_document"
                                  required=""
                                  style={{ width: "20rem" }}
                                  onChange={inputChange}
                                />
                              </div>
                              <img
                                id="output"
                                className="d-none"
                                style={{ width: "6rem", height: "4rem" }}
                              />
                            </div>
                            <button
                              className="button-orange my-3"
                              type="submit"
                            >
                              <span>Send</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </section>
        ) : (
          <FullPageSpinner />
        )}
      </DashboardLayout>
    </div>
  );
}

export default BuyingPackage;
