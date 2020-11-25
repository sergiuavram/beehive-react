import React from 'react'
import './homepage.style.scss';

// import logo from '../../assets/images/beehive logo 100.png';
import bees from '../../assets/images/bees.png';

// import CustomButton from '../../components/custom-button/custom-button.component';
import Header from '../../components/header/header.component';


const HomePage = () => {

    return (
        <div className="homepage">
            <header>
                <Header />
                <div>
                    {/* <div className="logo">
                    <img src={logo} alt="beehive logo" />
                    <h1>BeeHive</h1>
                </div>
                {user ?
                    <div className="gotohives">
                        <CustomButton name='Go To Hives' backgroundColor={'#FE8917'} borderRadius={'15px'} handleClick={click} />
                    </div>
                    :
                    <div className="signup">
                        <CustomButton name='Login' handleClick={click} />
                        <CustomButton name='Sign Up' backgroundColor={'#FE8917'} borderRadius={'15px'} handleClick={click} />
                    </div>
                } */}
                </div>
            </header>

            <div className="content">
                <div className="text">
                    <h1>Create You Own BeeHive and Manage You Bees!!</h1>
                </div>
                <img src={bees} alt="" />
            </div>
        </div>
    );
};

export default HomePage;
