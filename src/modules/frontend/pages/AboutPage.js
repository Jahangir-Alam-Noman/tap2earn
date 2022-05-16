import React from 'react';
import AbutUs from '../../../components/about/AbutUs';
import EffortlessInvesting from '../../../components/about/EffortlessInvesting';
import MainLayout from '../../../layouts/mainLayout/MainLayout';
import AboutInfo from './../../../components/about/AboutInfo';

const AboutPage = () => {
    return (
        <MainLayout title="About">
            <AbutUs />
            <AboutInfo />
            <EffortlessInvesting />
            {/* <OurTechnology />
            <Marketing /> */}
        </MainLayout>
    );
};

export default AboutPage;