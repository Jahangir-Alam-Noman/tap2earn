import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PasswordReset = () => {
    return (
        <section className="authPage-content">
            <div className="authLink-page">
                <NavLink className="active" to="/password-reset">Password Reset</NavLink>
            </div>

            <form>
                <input type="hidden" name="_token" value="87pC4flEI9cFNQ6CmFAKme8KeB9KhUh4cneAIice" />
                <div className="authForm-content">
                    <div className="authForm-field">
                        <label>Email</label>
                        <input type="email" name="email" value="" required="" autoComplete="email" autoFocus="" placeholder="Your Email Address" />
                    </div>
                 
                    <div className="authForm-link">
                        <Link to="/login"> Back To Login</Link>
                    </div>
                    <button type="submit">
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default PasswordReset;