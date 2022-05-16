import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthServices from '../../components/api/AuthServices';
import FullPageSpinner from '../../components/full-page-spinner';
import { useAuth } from '../../context/auth';
import DashboardFooter from '../../modules/userDashboard/components/dashboardFooter/DashboardFooter';
import DashboardSidebar from '../../modules/userDashboard/components/dashboardSidebar/DashboardSidebar';

const DashboardLayout = ({ children, title, description }) => {

    // const {currentUser} = useAuth();
    const history = useHistory();
    const { setToken, setCurrentUser, currentUser,initializing } = useAuth();

    
    const logOut = async() => {
        const res = await AuthServices.logout();
            // console.log(`res`, res)
        if (res) {
            setToken('');
            setCurrentUser('');
            history.push('/');
        }
    }

    
    // console.log(`currentUser`, currentUser)

    document.title = typeof title !== "undefined" && title !== null ? `${title} || Tap2Earn` : "Tap2Earn"

    return (
        !currentUser
            ? <FullPageSpinner /> :
        <>
            <form id="logout-form" action="https://m8trade.com/en/logout" method="POST" className="d-none">
                <input type="hidden" name="_token" value="CK3LRHb0UazuKq6rNSvlOu1We611IY6roXSeyQst" />
            </form>
            <section className="head-userName">
                <span>Hi, {currentUser.data.data.name} 👋</span>
            </section>
            <div className="account-body">
                <DashboardSidebar />
                <section className="main-content">
                    <div className="btn-logout">
                        <a className="logout" onClick={logOut}>Logout</a>
                    </div>
                    {
                        children
                    }

                    <DashboardFooter />
                </section>
            </div>
        </>
    );
};


export default DashboardLayout;