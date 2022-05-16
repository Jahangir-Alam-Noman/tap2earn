import React, { useEffect, useReducer } from "react";
import PackageServices from "../../../../components/api/PackageServices";

function TablePackage() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      packageHistory: "",
    }
  );

  const getpackageHistory = async () => {
    const res = await PackageServices.history();
    // console.log(`res`, res);
    if (res) {
      setState({
        packageHistory: res.data,
      });
    }
  };

  useEffect(() => {
    getpackageHistory();
  }, []);

  let packageTable = "";

  if (state.packageHistory) {
    packageTable = (
      <div>
        <h4 className="my-4">Package History</h4>
        <div className="plansPage-content" style={{ paddingTop: "0px" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Package Name</th>
                <th scope="col">Package Cost</th>
                <th scope="col">Requested At</th>
                <th scope="col">Approved At</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {state.packageHistory.map((pack) => (
              <tbody>
                <tr>
                  <td>{pack.package_name}</td>
                  <td>{pack.package_cost}</td>
                  <td>{pack.request_at}</td>
                  <td>{pack.approve_at}</td>
                  <td>{pack.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }

  return <div>{packageTable}</div>;
}

export default TablePackage;
