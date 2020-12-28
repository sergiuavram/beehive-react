import React, { useEffect } from 'react';
import './hives.style.scss';

import { connect } from 'react-redux';
import { getHives } from '../../redux/hives/hives.action';
import { checkLocalStorage } from '../../redux/user/user.action';

import HiveTab from '../../components/hive-tab/hive-tab.component';
import Header2 from '../../components/header2/header2.component';
import HiveTabAdd from '../../components/hive-tab-add/hive-tab-add.component';
import RequireLogin from '../../components/require-login/require-login.component';

const Hives = ({ user, getHives, hives, checkLocalStorage }) => {
    // this comes from redux somewhere
    const notification = false;

    // console.log(user)

    useEffect(() => {
        checkLocalStorage();
    })

    useEffect(() => {
        if (user) {
            getHives(user)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    if (user === null) {
        return <RequireLogin />
    } else {
        return (
            <div className="hives">
                <Header2 notification={notification} />
                <div className="all-hives">
                    {hives.hives.map(hive => <HiveTab key={hive.Id} hive={hive} />)}
                    <HiveTabAdd />
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ hives, user }) => ({
    hives,
    user
});

const mapDispatchToProps = (dispatch) => ({
    getHives: (user) => dispatch(getHives(user)),
    checkLocalStorage: () => dispatch(checkLocalStorage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hives);
