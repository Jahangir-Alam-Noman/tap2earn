import React from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout/DashboardLayout';
import MyInvestment from '../components/myInvestment/MyInvestment';

const DashInvestmentPage = () => {
    return (
        <DashboardLayout>
            <MyInvestment />
        </DashboardLayout>
    );
};

export default DashInvestmentPage;