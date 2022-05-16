import React from 'react';
import MainLayout from '../../../layouts/mainLayout/MainLayout';
import MyInvestment from '../../userDashboard/components/myInvestment/MyInvestment';

const Investment = () => {
    return (
        <MainLayout title="Package">
            <section className="plansPage-body">
            <div className="plansPage-title">
                <h1>Investment Plans</h1>

            </div>
            <div className="plansPage-content">
               <MyInvestment from="notLogged"/>
            </div>
        </section>
        </MainLayout>
    );
};

export default Investment;