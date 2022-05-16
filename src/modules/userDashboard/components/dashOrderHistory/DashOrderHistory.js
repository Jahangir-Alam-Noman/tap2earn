import React, { useReducer } from "react";
import TableInvest from "./TableInvest";
import TablePackage from "./TablePackage";
import TableWithdraw from "./TableWithdraw";

const DashOrderHistory = () => {
  
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
   
      invest:"invest",
      withdrawTable:false,
    }
  );

  const changeTable = (data)=>{
    setState({invest:data})
  }
  let tableData = "";
  if(state.invest === "invest"){
    tableData = <TableInvest/>
  }
  else if(state.invest === "withdraw"){
    tableData = <TableWithdraw/>
  }
  else if(state.invest === "package"){
    tableData = <TablePackage/>
  }
  // else if(state.invest === "ads"){
  //   tableData = <TableWithdraw/>
  // }

  return (
    <React.Fragment>
      <div className="page-title">
        <h2>Order History</h2>
      </div>
      <div className="buttons btnFlex">
        <button type="button" className="btn btn-primary" onClick={()=>changeTable("invest")}>Invest History</button>
        <button type="button" className="btn btn-secondary" onClick={()=>changeTable("withdraw")}>Withdraw History</button>
        <button type="button" className="btn btn-success" onClick={()=>changeTable("package")}>Package History</button>
        {/* <button type="button" class="btn btn-dark" onClick={()=>changeTable("ads")}>Ads History</button>/ */}
      </div>
      <section className="plansPage-body mt-3">
        <div>
            {tableData}
        </div>
        </section>
    </React.Fragment>
  );
};

export default DashOrderHistory;
