import React from "react";
import PackageLoginModule from "./PackageLoginModule";
import PackageWithoutLogin from "./withoutLoginModule/PackageWithoutLogin";

function PackageWIseModule({ name }) {

  return (
    <>
    {name === "No Active Package" ?<PackageWithoutLogin/>:  <PackageLoginModule name={name}/> }
  
    </>
  );
}

export default PackageWIseModule;
