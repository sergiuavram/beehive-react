import React from 'react';
import './404.style.scss';

import { Link } from 'react-router-dom';

import confusedBee from '../../assets/images/confused bee.png';

import Logo from '../../components/logo/logo.component';

const Error404 = () => {

    return (
        <div className="error-404">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <div className="message">
                <h1>Are you lost?</h1>
                <p>Click <Link to='/'>here</Link> to go home!</p>
                <img src={confusedBee} alt="" />
            </div>
        </div>
    );
};

export default Error404;