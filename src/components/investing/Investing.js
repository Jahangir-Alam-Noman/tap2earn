import React from 'react';
import { Link } from 'react-router-dom';

const Investing = () => {
    return (
        <section className="mainInfo-body">
            <div className="mainInfo-content">
                <div className="text">
                    {/* <h1>Become A Affilate</h1> */}
                    {/* EARN 1% RECURRING  */}

                    <p>
                    EARN UPTO <span style={{color:"green"}}>
                    1%
                        </span> RECURRING 
                    COMMISION ON REFERRALS  
                    </p>
                    <h5>
                    Earn an extra 5000 bdt by adding 50 members, and an extra 12500 bdt by contributing 100 members. You will be paid a commission based on the bundle that your referred person purchases. You will not receive a commission simply for referring someone.
                    </h5>
                
                        <div className="mainInfo-form">
                            <button type="submit"><Link to="/register"><span>REFER A FRIEND</span></Link></button>
                        </div>
          
                </div>
            </div>
        </section>
    );
};

export default Investing;