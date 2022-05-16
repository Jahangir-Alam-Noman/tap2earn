import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../../../assets//img/tap2earnLogo.png';
import task from '../../../../assets/img/account/clipboard.svg';
import orderIcon from '../../../../assets/img/account/orderlist.svg';
import overViewIcon from '../../../../assets/img/account/overview.svg';
import packageIcon from '../../../../assets/img/account/package.svg';
import payout from '../../../../assets/img/account/payout.svg';
import invest from '../../../../assets/img/account/profits.svg';
import referral from '../../../../assets/img/account/referral.svg';
import earn from '../../../../assets/img/account/salary.svg';
import { useAuth } from '../../../../context/auth';
import './DashboardHeader.css';

const DashboardSidebar = () => {

    let location = useLocation();

    const {currentUser} = useAuth();

    return (
        <section className="left-sidebar">
            <div className="sidebar-content">
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
                {/* <div className="user-name">
                    <p><span className='user-name'>
                    User name:
                        </span>{currentUser.data.data.name}</p>
                </div> */}
                <nav className="nav-sidebar user_dashboard_sidebar">
                    <ul>
                        <li>
                            <NavLink className="ico01" to="/user-dashboard/index" activeClassName="active">
                                <span><img src={overViewIcon} alt="overview" /></span>
                                <span>Overview</span>
                            </NavLink>
                            <NavLink className="ico01" to="/user-dashboard/profile" activeClassName="active">
                                <span><img src={overViewIcon} alt="overview" /></span>
                                <span>Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="ico02" to="/user-dashboard/buy-package" activeClassName="active">
                                <span><img src={packageIcon} alt="package" /></span>
                                <span> Buy a package</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="ico03" to="/user-dashboard/payouts" activeClassName="active">
                                <span><img src={payout} alt="payouts" /></span>
                                <span> Withdraw </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="ico04" to="/user-dashboard/orders" activeClassName="active">
                                <span><img src={orderIcon} alt="order list" /></span>
                                <span>  Orders History </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="ico06" to="/user-dashboard/refferals" activeClassName="active">
                                <span><img src={referral} alt="order list" /></span>
                                <span> Referral program </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="task" to="/user-dashboard/my-task" activeClassName="active">
                                <span><img src={task} alt="My task" /></span>
                                <span> My Task </span>
                                
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="invest" to="/user-dashboard/investment" activeClassName="active">
                                <span><img src={invest} alt="Investment" /></span>
                                <span> Investment </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="earn" to="/user-dashboard/my-earn" activeClassName="active">
                                <span><img src={earn} alt="My Earn" /></span>
                                <span> Message </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>




                
                <div class="sidebar-info">
                    <a href="mailto:support@tap2earn.com">support@tap2earn.com</a>
                    <p>If you have any questions about the service or have suggestions, write to us</p>
                </div>

            </div>
        </section>
    );
};

export default DashboardSidebar;