import React, { useState } from 'react'
import './signup.style.scss';

import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spacer from '../../components/spacer/spacer.component';

import { connect } from 'react-redux';
import { signUp } from '../../redux/user/user.action';
import { useHistory } from "react-router-dom"


const Signup = ({ signUp }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errUser, setErrUser] = useState(false);
    const [errPassword, setErrPassword] = useState(false);
    const [errConfirmPassword, setErrConfirmPassword] = useState(false);

    const [focusUser, setFocusUser] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [focusConfirmPassword, setFocusConfirmPassword] = useState(false);

    const history = useHistory();

    const handleSignup = async () => {
        if (focusUser && focusPassword && focusConfirmPassword) {
            const reset = () => {
                setUser('');
                setPassword('');
                setConfirmPassword('');
                history.push('/hives');
            }

            const data = {
                reset,
                user: { username: user, password }
            }

            signUp(data)

        } else {
            console.log('unfocused')
            setErrUser(true);
            setErrPassword(true);
            setErrConfirmPassword(true);
        }
    }

    return (
        <div className="signup">
            <div className="logo-wrapper">
                <Logo />
            </div>

            <div className="form">
                <h1>Log in to BeeHive</h1>
                <CustomInput
                    handleChange={(e) => {
                        setUser(e.target.value)
                        e.target.value.length < 3 ? setErrUser(true) : setErrUser(false)
                    }}
                    handleFocus={() => setFocusUser(true)}
                    value={user}
                    placeholder='User'
                    type='text'
                    error={errUser}
                    errorMsg='Username have to have at least 3 characters'
                />
                <Spacer height='11px' />
                <CustomInput
                    handleChange={(e) => {
                        setPassword(e.target.value)
                        e.target.value.length < 3 ? setErrPassword(true) : setErrPassword(false)
                    }}
                    handleFocus={() => setFocusPassword(true)}
                    value={password}
                    placeholder='Password'
                    type='password'
                    error={errPassword}
                    errorMsg='Password have to have at least 3 characters'
                />
                <Spacer height='11px' />
                <CustomInput
                    handleChange={(e) => {
                        setConfirmPassword(e.target.value)
                        e.target.value !== password ? setErrConfirmPassword(true) : setErrConfirmPassword(false)
                    }}
                    handleFocus={() => setFocusConfirmPassword(true)}
                    value={confirmPassword}
                    placeholder='Confirm password'
                    type='password'
                    error={errConfirmPassword}
                    errorMsg='Password do not match'
                />
                <Spacer height='11px' />
                <CustomButton
                    name='Sign Up'
                    backgroundColor={'#0A7815'}
                    borderRadius={'7px'}
                    color='white'
                    fontSize='14px'
                    handleClick={handleSignup}
                /> {/* extra editing local scss file */}
                <h2>OR</h2>
                <CustomButton
                    name='Continu with Google'
                    backgroundColor='#4c8bf5'
                />
                <Spacer height='11px' />
                <CustomButton
                    name='Continu with Facebook'
                    backgroundColor='#3b5998'
                />
                <div className="have-acc">
                    <Link to='/login'>Already have an account? Log In</Link>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUp: (data) => dispatch(signUp(data)),
})

export default connect(null, mapDispatchToProps)(Signup);

