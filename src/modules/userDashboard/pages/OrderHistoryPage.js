import React from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout/DashboardLayout';
import DashOrderHistory from '../components/dashOrderHistory/DashOrderHistory';

const OrderHistoryPage = () => {
    return (
        <DashboardLayout>
            <DashOrderHistory />
        </DashboardLayout>
    );
};

export default OrderHistoryPage;