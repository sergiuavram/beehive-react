import React from 'react';
import './logo.style.scss';

import logo from '../../assets/images/beehive logo 100.png';

const Logo = () => {

    return (
        <div className="logo">
            <img src={logo} alt="beehive logo" />
            <h1>BeeHive</h1>
        </div>
    );
};

export default Logo;
