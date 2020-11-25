import React, { useState } from 'react';
import './hive-tab-add.style.scss';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createHive } from '../../redux/hives/hives.action';

import CustomInput from '../custom-input/custom-input.component';

const HiveTabAdd = ({ user, createHive }) => {
    const [display, setDisplay] = useState(false);
    const [hiveName, setHiveName] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorCreateHive, setErrorCreateHive] = useState('');

    const history = useHistory();

    const redirect = () => {
        // send visitor to hive page when hive is created
        history.push(`/hive/${hiveName}`)
    }

    const handleCreateHive = () => {
        if (!hiveName.trim().length) {
            setErrorName(true)
        } else {
            // displayForm();
            createHive(hiveName.trim(), user, setErrorCreateHive, redirect);
        }
    }

    // mak the form/div that ask you to set a name for the new hive visible or onvisible (display bloc / display none)
    const displayForm = () => {
        setDisplay(!display)
    }

    return (
        <div className="hive-tab-add" >
            <div className="add-hive" style={{ display: display ? 'block' : 'none' }}>
                <CustomInput
                    placeholder='Enter hive name'
                    handleChange={e => {
                        setHiveName(e.target.value)
                        e.target.value.trim().length ? setErrorName(false) : setErrorName(true)
                    }}
                    value={hiveName}
                />
                {errorName ? <h3>can't be empty</h3> : ''}
                <div className="btn-create-hive" onClick={handleCreateHive}>
                    Create New Hive
               </div>
                <div className="error-create-hive">
                    {errorCreateHive ? typeof errorCreateHive === 'string' ? errorCreateHive : 'something went wrong, try again' : ''}
                </div>
            </div>
            <p onClick={displayForm}>+</p>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
    createHive: (hiveName, user, cb, cb2) => dispatch(createHive(hiveName, user, cb, cb2))
})

export default connect(mapStateToProps, mapDispatchToProps)(HiveTabAdd);
