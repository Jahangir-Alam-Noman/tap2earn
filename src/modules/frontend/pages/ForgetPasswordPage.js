import React from 'react';
import PasswordReset from '../../../components/Authentication/PasswordReset';
import MainLayout from '../../../layouts/mainLayout/MainLayout';

const ForgetPasswordPage = () => {
    return (
        <MainLayout title="Password Reset">
            <PasswordReset />
        </MainLayout>
    );
};

export default ForgetPasswordPage;