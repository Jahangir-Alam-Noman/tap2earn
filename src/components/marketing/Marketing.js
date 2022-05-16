import React from 'react';

const Marketing = () => {
    return (
        <section className="fastStart-body about">
            <h3>Start making profit right now</h3>
            <div className="fastStart-form">
                <form action="https://m8trade.com/en/register" method="get">
                    <div className="form-content">
                        <input type="email" name="email" placeholder="Enter your E-mail" />
                        <button type="submit"><span>Start investing</span></button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Marketing;