import React from 'react';
import './header2.style.scss';

import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/beehive logo 100.png';
import bell from '../../assets/images/bell 35.png';
import bellNotification from '../../assets/images/bell 35 notification.png';

const Header2 = ({ notification }) => {
    const history = useHistory();

    const handleClickLogo = () => {
        history.push('/');
    }

    return (
        <div className="header2">
            <header>
                <div className="logo">
                    <img src={logo} alt="" onClick={handleClickLogo} />
                </div>
                <div className="menu">
                    <div className="plus">

                    </div>
                    <div className="notification">
                        <img src={notification ? bellNotification : bell} alt="" />
                    </div>
                    <div className="account">

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header2;
