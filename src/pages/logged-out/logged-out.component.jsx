import React from 'react';
import './logged-out.style.scss';

import bee100 from '../../assets/images/bee 100.png';
import bee300 from '../../assets/images/bee 300.png';
import beehive from '../../assets/images/beehive.png';

import Header from '../../components/header/header.component';

const LoggedOut = () => {

    return (
        <div className="logged-out">
            <header>
                <div className="wrapper">
                    <Header />
                </div>
            </header>



            <div className="content">
                <div className="images">
                    <img src={beehive} alt="" className='beehive' />
                    <img src={bee100} alt="" className='bee1' />
                    <img src={bee100} alt="" className='bee2' />
                    <img src={bee100} alt="" className='bee3' />
                    <img src={bee100} alt="" className='bee4' />
                    <img src={bee300} alt="" className='bee5' />
                </div>

                <div className="text">
                    <h1>Thanks for ussing BeeHive!</h1>
                    <p>You’re all logged out.</p>
                </div>
            </div>


        </div>
    );
};

export default LoggedOut;
