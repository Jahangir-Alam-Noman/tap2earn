import React from 'react';
import OurPlaneCard from './OurPlaneCard';

const OurPlans = () => {
    

    return (
        <section className="rectangle-body mrgB-v1">
            <div className="rectangle-figure"></div>
            <div className="homePlans-body">
                <div className="title text-center">
                    <h2>Our Plans</h2>
                </div>
                <OurPlaneCard />
                {/* <OurPlaneCard />
                <OurPlaneCard /> */}


                {/* <Tabs defaultActiveKey="1_month" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="1_month" title="1 month">
                       
                    </Tab>
                    <Tab eventKey="2_months" title="2 months">
                        <OurPlaneCard />
                    </Tab>
                    <Tab eventKey="3_months" title="3 months">
                        <OurPlaneCard />
                    </Tab>
                </Tabs> */}
            </div>
        </section>
    );
};

export default OurPlans;