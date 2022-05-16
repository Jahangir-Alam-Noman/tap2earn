import React, { useEffect, useReducer } from "react";
import InvestServices from "../../../../components/api/InvestServices";

function TableInvest() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      investHistory: "",
    }
  );

  const getInvestHistory = async () => {
    const res = await InvestServices.history();
    // console.log(`res`, res);
    if (res) {
      setState({
        investHistory: res.data,
      });
    }
  };

  useEffect(() => {
    getInvestHistory();
  }, []);

  let investTable = "";

  if (state.investHistory) {
    investTable = (
      <div>
        <h4 className="my-4">Invest History</h4>
        <div className="plansPage-content" style={{ paddingTop: "0px" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Requested At</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {state.investHistory.map((invest) => (
              <tbody>
                <tr>
                  <td>{invest.name}</td>
                  <td>{invest.amount}</td>
                  <td>{invest.created_at}</td>
                  <td>{invest.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }

  return <div>{investTable}</div>;
}

export default TableInvest;
