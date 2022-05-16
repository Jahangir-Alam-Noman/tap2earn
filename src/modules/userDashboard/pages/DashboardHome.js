import React from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout/DashboardLayout';
import Overview from '../components/overview/Overview';
// import DashboardLayout from '../../layouts/dashboardLayout/DashboardLayout';

const DashboardHome = () => {
// console.log(`localStorage.getItem("userData")`, localStorage.getItem("loginData"))
    // localStorage.getItem("userData")
    return (
        <DashboardLayout>
            {/* <DashReffarlProgram /> */}
            <Overview />
        </DashboardLayout>
    );
};

export default DashboardHome;