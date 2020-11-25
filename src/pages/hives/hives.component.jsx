import React, { useEffect } from 'react';
import './hives.style.scss';

import { connect } from 'react-redux';

import HiveTab from '../../components/hive-tab/hive-tab.component';
import Header2 from '../../components/header2/header2.component';
import HiveTabAdd from '../../components/hive-tab-add/hive-tab-add.component';

const Hives = ({ user, createHive }) => {
    // this comes from redux somewhere
    const notification = false;

    // console.log(user)

    return (
        <div className="hives">
            <Header2 notification={notification} />
            <div className="all-hives">
                <HiveTab />
                <HiveTab />
                <HiveTab />
                <HiveTab />
                <HiveTab />
                <HiveTab />
                <HiveTab />
                <HiveTabAdd />
            </div>
        </div>
    );
};

const mapStateToProps = ({ hives }) => ({
    hives
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Hives);
