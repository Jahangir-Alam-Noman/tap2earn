import React from 'react';
import Login from '../../../components/Authentication/Login';
import MainLayout from '../../../layouts/mainLayout/MainLayout';

const LoginPage = () => {
    return (
        <MainLayout title="Sign In">
            <Login />
        </MainLayout>
    );
};

export default LoginPage;