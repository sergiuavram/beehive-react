import React, { useState } from 'react';
import './login.style.scss';

import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spacer from '../../components/spacer/spacer.component';

import { connect } from 'react-redux';
import { login } from '../../redux/user/user.action';
import { useHistory } from "react-router-dom"


const Login = ({ login }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [errUser, setErrUser] = useState(false);
    const [errPassword, setErrPassword] = useState(false);

    const [focusUser, setFocusUser] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);

    const history = useHistory();

    const handleLogin = async () => {
        if (focusPassword && focusUser) {
            const reset = () => {
                setUser('');
                setPassword('');
                history.push('/hives');
            }

            const data = {
                reset,
                user: { username: user, password }
            }

            login(data);
        } else {
            setErrUser(true);
            setErrPassword(true);
        }
    }

    return (
        <div className="login">
            <div className="logo-wrapper">
                <Logo />
            </div>

            <div className="form">
                <h1>Log in to BeeHive</h1>
                <CustomInput
                    handleChange={(e) => {
                        setUser(e.target.value)
                        e.target.value.length ? setErrUser(false) : setErrUser(true)
                    }}
                    handleFocus={() => setFocusUser(true)}
                    value={user}
                    placeholder='User'
                    error={errUser}
                    errorMsg='Username can not be empty!'
                />
                <Spacer height='11px' />
                <CustomInput
                    handleChange={(e) => {
                        setPassword(e.target.value)
                        e.target.value.length ? setErrPassword(false) : setErrPassword(true)
                    }}
                    handleFocus={() => setFocusPassword(true)}
                    value={password}
                    placeholder='Password'
                    type='password'
                    error={errPassword}
                    errorMsg='Password can not be empty!'
                />
                <Spacer height='11px' />
                <CustomButton
                    name='Log in'
                    handleClick={handleLogin}
                    backgroundColor={'#0A7815'}
                    borderRadius={'7px'}
                    color='white'
                    fontSize='14px'
                /> {/* extra editing local scss file */}
                <h2>OR</h2>
                <CustomButton name='Continu with Google' backgroundColor='#4c8bf5' />
                <Spacer height='11px' />
                <CustomButton name='Continu with Facebook' backgroundColor='#3b5998' />
                <div className="have-acc">
                    <Link to='/signup'> Don’t have account? Sing Up</Link>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToPeops = dispatch => ({
    login: (data) => dispatch(login(data)),
})

export default connect(null, mapDispatchToPeops)(Login);
