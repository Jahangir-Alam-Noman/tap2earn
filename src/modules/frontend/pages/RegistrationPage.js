import React from 'react';
import Registration from '../../../components/Authentication/Registration';
import MainLayout from '../../../layouts/mainLayout/MainLayout';

const RegistrationPage = () => {
    return (
        <MainLayout title="Sign up">
            <Registration />
        </MainLayout>
    );
};

export default RegistrationPage;