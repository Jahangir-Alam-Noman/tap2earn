import React from 'react';
import AskQuestion from '../../../components/askQuestion/AskQuestion';
import Facilities from '../../../components/facilities/Facilities';
import Landing from '../../../components/Landing/Landing';
import MainLayout from '../../../layouts/mainLayout/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <Landing />
            <Facilities />
            {/* <OurPlans /> */}
            {/* <Marketing /> */}
            <AskQuestion />
        </MainLayout>
    );
};

export default HomePage;