import React from 'react';
import './logo.style.scss';

import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/beehive logo 100.png';

const Logo = () => {
    const history = useHistory();

    const handleClickLogo = () => {
        history.push('/');
    }

    return (
        <div className="logo" onClick={handleClickLogo} >
            <img src={logo} alt="beehive logo" />
            <h1>BeeHive</h1>
        </div>
    );
};

export default Logo;
