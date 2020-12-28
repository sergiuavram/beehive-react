import React from 'react';
import './require-login.style.scss';

import { Link } from "react-router-dom";

import Logo from '../../components/logo/logo.component';

const RequireLogin = () => {
    return (
        <div className="require-login">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <div className="content">
                <p>You have to be logged in.</p>
                <p>Click here to <Link to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default RequireLogin;