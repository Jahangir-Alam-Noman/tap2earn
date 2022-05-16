import React, { useEffect, useReducer } from "react";
import swal from "sweetalert";
import main_banner from "../../../../assets/img/package/withdraw.png";
import AuthServices from "../../../../components/api/AuthServices";
import InvestServices from "../../../../components/api/InvestServices";
import VideoServices from "../../../../components/api/VideoServices";
import WithdrawServices from "../../../../components/api/WithdrawServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";

const SubscriptionWithdraw = () => {
  // button-amounts-selected
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      selectedAmount: 0,
      binance_id: "",
      limits: "",
      balance: 0,
    }
  );

  const getWithdrawLimit = async () => {
    let res = await WithdrawServices.limit();
    // console.log(`res`, res.data);
    setState({ limits: res.data });
  };

 
  const getBalance = async ()=>{
    // let res = await VideoServices.incomeVideo();
    let res2 = await AuthServices.user();
    console.log('res', res2.data.subscription_balance);
    setState({balance:parseInt(res2.data.subscription_balance) })
  }

  // const getRefer = async () => {
  //   console.log(`resgetMyCurrentInvest`, res.data);
  //   setState({referral_balance: res.data.referral_balance || ""});
  // };

  useEffect(() => {
    getWithdrawLimit();
    getBalance();
    // getRefer();
  }, []);

  const inputChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    setState({ [name]: value });
  };

  const inputSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      binance_id: state.binance_id,
      amount: state.selectedAmount,
      method: "binance id",
    };
    console.log(inputData.amount);

    if (!(inputData.amount && inputData.binance_id)) {
      swal(
        "Wrong request",
        `${
          !inputData.amount ? "Please select amount" : "Binance id is required"
        } `,
        "error"
      );
    }else if(state.selectedAmount > state.balance ){
      swal("Error!", "Insufficient Balance", "error");
    } else {
      const res = await InvestServices.withDrawPackage(inputData);
      // console.l)
      console.log(`res`, res);

      if (res.status == 422) {
        swal("Error!", res.data.message, "error");
      } else {
        swal(
          "Thank you for your package request job!",
          "We will review your information shortly. It will take upto 6 hours for us to approve your request.",
          "success"
        );
      }
    }
  };

  let limits = "";

  if (state.limits) {
    limits = state.limits.map((limit) => {
      return (
        <input
          type="button"
          value={limit.amount}
          className={
            state.selectedAmount == limit.amount
              ? `button-amounts button-amounts-selected my-3`
              : `button-amounts my-3`
          }
          onClick={() => setState({ selectedAmount: limit.amount })}
        />
      );
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
            <h2>Subscription Withdraw</h2>
          </div>

          <div className="balance">
            <h3>Balance:{state?.balance} tk</h3>
          </div>
          <div className="input">
            <div className="item">
              <div className="payout-formBody">
                <form onSubmit={inputSubmit}>
                  <label>Enter your Binance wallet address: </label>
                  <div className="user-wallet">
                    <input
                      type="text"
                      name="binance_id"
                      required=""
                      id="wallet-value"
                      onChange={inputChange}
                      value={state.binance_id}

                      // onChange={inputChange}
                    />
                  </div>
                  <div>
                    <label>Select Amount:</label>
                    <div className="amounts">
                      {limits}
                   
                    </div>
                  </div>

                  <button className="button-orange my-3" type="submit">
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default SubscriptionWithdraw;
