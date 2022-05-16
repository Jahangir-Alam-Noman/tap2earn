import React, { useReducer } from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import swal from "sweetalert";
import main_banner from "../../../../assets/img/package/withdraw.png";
import InvestServices from "../../../../components/api/InvestServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";

const InvestWithdraw = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      selectedAmount: 0,
      investHistory: "",
      showForm: "",
      isLoading: true,
    }
  );

  const showForm = (data) => setState({ showForm: data });

  const { isLoading, data } = useQuery("approvedData", () => {
    let res = InvestServices.approved();
    console.log('res', res.data)
    setState({ investHistory: res.data });
    return res;
  });

  // console.log(`investHistory`, data)

  if (isLoading == true) {
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

  const withDrawRequest = (data) => {
    console.log(`data`, data);
    if (data.days_count > data.accrual_days) {
      const res = InvestServices.withDrawInvest(data.id);
      //  console.log(`res<<<<`, res)
      if (res) {
        swal(
          "Thank you for your package request job!",
          "We will review your information shortly. It will take upto 6 hours for us to approve your request.",
          "success"
        );
      }
    } else {
      swal("Error!", "Your accrual days is not finished!", "error");
    }
    setState({ showForm: !state.showForm });
  };

  // console.log(`data.data`,data.data )
  let investShow = "";
  if (data) {

    investShow = data.data.map((invest) => {
      if(parseInt(invest.withdraw_status) !== 2){
        console.log('nvest.withdraw_status', invest.withdraw_status)

        if (state.showForm && invest.id == state.showForm) {
          return (
            <div className="invest_withDraw_form">
              <h3>{invest.package_name}</h3>
              <h4>Enter Binance wallet balance</h4>
              <div className="user-wallet">
                <input
                  className="withDraw_input"
                  type="text"
                  name="transaction_id"
                  required=""
                  id="wallet-value"
                  // placeholder='Enter Binance wallet balance'
                  // value={state.transaction_id}
                  // onChange={inputChange}
                />
              </div>
              <button
                type="button"
                style={{ margin: "auto" }}
                className="button-amounts my-3"
                onClick={() => withDrawRequest(invest)}
              >
                Request
              </button>
            </div>
          );
        } else
          return (
            <div className="invest_withDraw">
              <h3>{invest.package_name}</h3>
              <button
                type="button"
                style={{ marginLeft: "auto" }}
                className="button-amounts my-3"
                onClick={() => showForm(invest.id)}
              >
                Withdraw
              </button>
            </div>
          );
      }
    });
  }

  return (
    <DashboardLayout>
      <div className="content">
        <section className="main-content pt-0">
          <div className="container">
            <div className="buy-package-banner">
              <h3>How to get your Binance Wallet Address</h3>

              <ul>
                <li>
                  <span>
                    Open your Binance App and tap [Wallets] - [Deposit].
                  </span>
                </li>
                <li>
                  <span>Choose the cryptocurrency USDT.</span>
                </li>
                <li>
                  <span>
                    You will see the available networks for depositing USDT.
                    Please choose the deposit network carefully “BEP20”.
                  </span>
                </li>
                <li>
                  <span>
                    Click to copy your Binance Wallet’s deposit address and
                    paste it to the address field on the platform.
                  </span>
                </li>
                <li>
                  <span>
                    After confirming the withdrawal request, please wait
                    patiently for the transfer to be processed. The funds will
                    be credited to your Binance account shortly after.
                  </span>
                </li>
              </ul>

              <div
                className="banner_btn"
                onClick={() => setState({ mainBannner: !state.mainBannner })}
              >
                <button>How to get your Binance Wallet Address</button>
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

          <div className="page-title">
            <h2>Investment Withdraw</h2>
          </div>

          <div className="balance">
            <h3>Current Investments:</h3>
          </div>
          <div>{/* {data.data ? <h4>No data found</h4>:"" } */}</div>
          <div className="input">{investShow}</div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default InvestWithdraw;
