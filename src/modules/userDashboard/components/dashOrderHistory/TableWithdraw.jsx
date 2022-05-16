import React, { useEffect, useReducer } from "react";
import WithdrawServices from "../../../../components/api/WithdrawServices";

function TableWithdraw() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      withDrawHistory: "",
    }
  );

  const getWithdrawHistory = async () => {
    const res = await WithdrawServices.history();
    // console.log(`res`, res);
    if (res) {
      setState({
        withDrawHistory: res.data,
      });
    }
  };

  useEffect(() => {
    getWithdrawHistory();
  }, []);

  let withdrawTable = "";

  if (state.withDrawHistory) {
    withdrawTable = (
      <div>
        <h4 className="my-4">WithDraw History</h4>
        <div className="plansPage-content" style={{ paddingTop: "0px" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Method</th>
                <th scope="col">Requested At</th>
                <th scope="col">Status</th>
                <th scope="col">Binance Id</th>
              </tr>
            </thead>
            {state.withDrawHistory.map((withDraw) => (
              <tbody>
                <tr>
                  <td>{withDraw.amount}</td>
                  <td>{withDraw.method}</td>
                  <td>{withDraw.created_date}</td>
                  <td>{withDraw.status}</td>
                  <td>{withDraw.binance_id}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }

  return <div>{withdrawTable}</div>;
}

export default TableWithdraw;
