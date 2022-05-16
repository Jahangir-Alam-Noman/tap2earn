import QRCode from "qrcode";
import React, { useEffect, useReducer, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import main_banner from "../../../../assets/img/package/main-banner.png";
import InvestServices from "../../../../components/api/InvestServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";

function CreateInvest() {
  let { id } = useParams();
  // console.log(`id`, id)
  const history = useHistory();
  const ref = useRef();

  //   useLayoutEffect(() => {
  //       ref.current.style.setProperty("margin", "0px", "important");
  //  }, []);

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      singlenvest: "",
      showForm: false,
      transection_id: "",
      walletAddress: "0x184372a68e0f511474690380b3e85714db0b8b4d",
      prove_document: "",
      invest_id: "",
      amount: "",
    }
  );
  const getSingleInvest = async () => {
    const res = await InvestServices.singleInvest(id);
    console.log(`res`, res);
    if (res) {
      setState({
        singlenvest: res.data,
        invest_id: res.data.id,
        amount: res.data.amount,
      });
    }
  };

  useEffect(() => {
    getSingleInvest();
    QRCode.toDataURL(state.walletAddress).then((data) => {
      setState({ src: data });
    });
  }, []);

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

  const copyToClipboard = (e) => {
    e.preventDefault();
    let inputValue = document.querySelector("#walletAddress");
    console.log("inputValue", inputValue.value);
    inputValue.select();
    document.execCommand("copy");
    setState({ copied: true });
  };

  const inputSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      transaction_id: state.transection_id,
      prove_document: state.prove_document,
      invest_id: state.invest_id,
      invest_amount: state.amount,
    };
    let formdata = new FormData();
    Object.keys(inputData).map((key) => {
      formdata.append(key, inputData[key]);
    });

    const res = await InvestServices.store(formdata);
    console.log(`res`, res);
    if (res.status) {
      swal({
        icon: "success",
        text: res.message,
        timer: 2000,
      });
      history.push("/user-dashboard/investment");
    }
  };

  return (
    <div>
      <DashboardLayout>
        <section
          className="rectangle-body mrgB-v1"
          // style={{ padding: "0px 40px" }}
        >
          <div className="container">
            <div className="buy-package-banner">
              <h3>HOW TO INVEST THROUGH BINANCE</h3>

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
                    account. Our Wallet address is provided below. Also you can
                    directly deposit by scan the QR Code.
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
                    After submitting the required fields, the administrator will
                    review and approve your access to our application.
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
              marginBottom: "64px",
              /* margin-left: 0.8rem; */
              textAlign: "center",
            }}
          >
            {state.singlenvest.message}
          </h1>
          <div className="container" ref={ref}>
            <div className="row">
              <div className="col-md-12">
                <div className="plansItem">
                  <div className="investment_box_wrapper float_left">
                    <div className="investment_icon_circle">
                      <i className="flaticon-bar-chart"></i>
                    </div>
                    <div className="investment_border_wrapper"></div>
                    <div className="row" style={{ padding: "35px 0px" }}>
                      <div className="col-md-12">
                        <div className="d-flex justify-content-between px-3 mb-3">
                          <h4 style={{ fontSize: "1rem", fontWeight: "700" }}>
                            Name:
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            {state.singlenvest.name}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between px-3 mb-3">
                          <h4 style={{ fontSize: "1rem", fontWeight: "700" }}>
                            Amount:
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            {state.singlenvest.amount}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between px-3 mb-3">
                          <h4 style={{ fontSize: "1rem", fontWeight: "700" }}>
                            Accrual days
                            <span style={{ fontSize: "11.5px" }}>
                              (can not withdraw money before accrual days)
                            </span>
                            :
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            {state.singlenvest.accrual_days}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between px-3">
                          <h4 style={{ fontSize: "1rem", fontWeight: "700" }}>
                            Money Return:
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            {state.singlenvest.money_return} %
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="about_btn ">
                      <a
                        style={{ float: "left" }}
                        className="plans_btn"
                        onClick={() => setState({ showForm: !state.showForm })}
                      >
                        Invest
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
                            <button className="small" onClick={copyToClipboard}>
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
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="item">
                      <h3 className="mb-3 text-center">Start Investing</h3>
                      <div className="payout-formBody">
                        <form onSubmit={inputSubmit}>
                          <label>Enter transection id: </label>
                          <div className="user-wallet">
                            <input
                              type="text"
                              name="transection_id"
                              required=""
                              id="wallet-value"
                              value={state.transection_id}
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
                          <button className="button-orange my-3" type="submit">
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
      </DashboardLayout>
    </div>
  );
}

export default CreateInvest;
