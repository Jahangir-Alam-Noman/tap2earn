import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import overViewIcon from '../../../../assets/img/account/ico01.svg'
// import './DashboardHeader.css'
const DashboardSidebar = () => {

    let location = useLocation();

    return (
        <section className="left-sidebar">
            <div className="sidebar-content">
                <div className="logo">
                    <Link to="/user-dashboard/index"></Link>
                </div>
                <div className="user-name">
                    <p>Fayez</p>
                </div>
                <nav className="nav-sidebar user_dashboard_sidebar">
                    <ul>
                        <li className="active" >
                            <NavLink className="ico01" to="/user-dashboard/index" activeClassName="active">
                                Overview
                            </NavLink>
                        </li>
                        <li><NavLink className="ico02" to="/user-dashboard/investments" activeClassName="active">Buy a package</NavLink></li>
                        <li><NavLink className="ico03" to="/user-dashboard/payouts" activeClassName="active">Payouts</NavLink></li>
                        <li><NavLink className="ico04" to="/user-dashboard/orders" activeClassName="active">Orders History</NavLink></li>
                        <li><NavLink className="ico06" to="/user-dashboard/refferals" activeClassName="active">Referral program</NavLink></li>
                        <li><NavLink className="task" to="/user-dashboard/my-task" activeClassName="active">My Task</NavLink></li>
                        <li><NavLink className="invest" to="/user-dashboard/investment" activeClassName="active">Investment</NavLink></li>
                        <li><NavLink className="earn" to="/user-dashboard/my-earn" activeClassName="active">My Earn</NavLink></li>
                    </ul>
                </nav>
                <div className="sidebar-info">
                    <a href="mailto:support@tap2earn.com">support@tap2earn.com</a>
                    <p>If you have any questions about the service or have suggestions, write to us</p>
                </div>

            </div>
        </section>
    );
};

export default DashboardSidebar;