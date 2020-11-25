import React, { useState, useEffect } from 'react';
import './hive.style.scss';

import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentHive } from '../../redux/hives/hives.action';

import Header2 from '../../components/header2/header2.component';
import HiveList from '../../components/hive-list/hive-list.component';

const Hive = ({ user, hive, getCurrentHive }) => {
    const params = useParams();
    // notification comes from redux somewhere
    const notification = true;
    const [wrapperHeight, setWrapperHeight] = useState(399);
    const [hiveName, setHiveName] = useState('');

    // set the height of .wrapper based on the height og the windows
    useEffect(() => {
        setWrapperHeight(window.innerHeight - 67);
        window.addEventListener('resize', () => {
            setWrapperHeight(window.innerHeight - 67)
        });

        return () => {
            window.addEventListener('resize', () => {
                setWrapperHeight(window.innerHeight - 67)
            });
        };
    }, [])

    useEffect(() => {
        setHiveName(params.hive_name); // get the name of the hive we are curently accesing
        getCurrentHive(user, hiveName); // get the hive content
    }, [params, user, getCurrentHive, hiveName]); // check to see if there is an option without using dependencies: [user, getCurrentHive, hiveName]

    return (
        <div className="hive">
            <Header2 notification={notification} />
            <div className="wrapper" style={{ height: `${wrapperHeight}px` }}>
                <h1>Hive Name </h1>
                <div className="all-lists">
                    <div className="list-wrapper">
                        <HiveList />
                        <HiveList />
                        <HiveList />
                        <div className="create-list">
                            + Create List
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const mapStateToProps = ({ user, hive }) => ({
    user,
    hive
})

const mapDispatchToProps = (dispatch) => ({
    getCurrentHive: (user, hiveName) => dispatch(getCurrentHive(user, hiveName)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Hive);
