import React from 'react';
import PackagePlan from '../../../components/packagesPlan/PackagePlan';
import MainLayout from '../../../layouts/mainLayout/MainLayout';

const Packages = () => {
    return (
        <MainLayout title="Package">
            <PackagePlan />
            {/* <Marketing /> */}
        </MainLayout>
    );
};

export default Packages;