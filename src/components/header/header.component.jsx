import React from 'react';
import './header.style.scss';

import { useHistory } from "react-router-dom"
import { connect } from 'react-redux';
import { logout } from '../../redux/user/user.action';

import CustomButton from '../custom-button/custom-button.component';

import Logo from '../logo/logo.component';

const Header = ({ user, logout }) => {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login')
    }

    const handleSignUp = () => {
        history.push('/signup')
    }

    const handleGoToHives = () => {
        history.push('/hives')
    }

    const handleLogout = () => {
        logout();
        console.log('logging out')

    }

    return (
        <div className="header">
            {/* <div className="logo">
                <img src={logo} alt="beehive logo" />
                <h1>BeeHive</h1>
            </div> */}
            <Logo />
            {user ?
                <div className="gotohives">
                    <CustomButton
                        name='Go To Hives'
                        backgroundColor={'#FE8917'}
                        borderRadius={'15px'}
                        handleClick={handleGoToHives}
                        padding='8px 15px'

                    />
                    <CustomButton
                        name='Logout'
                        handleClick={handleLogout}
                        color='black'
                        margin='0 0 0 20px'
                    />
                </div>
                :
                <div className="signup">
                    <CustomButton
                        name='Login'
                        handleClick={handleLogin}
                        color='black'
                    />
                    <CustomButton
                        name='Sign Up'
                        backgroundColor={'#FE8917'}
                        borderRadius={'15px'}
                        handleClick={handleSignUp}
                        padding='8px 15px'
                        margin='0 0 0 20px'
                        color='black'
                    />
                </div>
            }
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispathToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispathToProps)(Header);
