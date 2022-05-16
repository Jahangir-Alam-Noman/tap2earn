import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
    return (
        <footer className="account-footer">
            <div className="social-link">
                <Link className="ico02" to="/" target="_blank"></Link>
                <Link className="ico03" to="/" target="_blank"></Link>
                <Link className="ico04" to="/" target="_blank"></Link>
                <Link className="ico05" to="/" target="_blank"></Link>
            </div>
            <div className="info">
                <p>Copyright © 2021 Tap2Earn</p>
                <Link to="/">Privacy policy</Link>
            </div>
        </footer>
        
    );
};

export default DashboardFooter;