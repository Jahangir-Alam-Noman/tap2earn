import React from 'react';
import Investing from '../../../components/investing/Investing';
import StartInvesting from '../../../components/startInvesting/StartInvesting';
import MainLayout from '../../../layouts/mainLayout/MainLayout';

const ReferralProgramPage = () => {
    return (
        <MainLayout>
            <Investing />
            <StartInvesting />
            {/* <Marketing /> */}
        </MainLayout>
    );
};

export default ReferralProgramPage;