import React from 'react';
import OurPlaneCard from '../../../../components/ourPlans/OurPlaneCard';

const DashInvestment = () => {
   
    return (

        <React.Fragment>
            <div className="page-title text-center">
                <h2>Plans</h2>
            </div>
            <div className="content custom_dashboard_tab mt-5">
            <OurPlaneCard />

            
            </div>
        </React.Fragment>
    );
};

export default DashInvestment;