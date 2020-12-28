import React, { useState, useEffect } from 'react';
import './hive.style.scss';

import { useParams, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHive, clearHive, getHiveId, createNewList } from '../../redux/current-hive/current-hive.action';
import { deleteHive } from '../../redux/hives/hives.action';
import { checkLocalStorage } from '../../redux/user/user.action';

import Header2 from '../../components/header2/header2.component';
import HiveList from '../../components/hive-list/hive-list.component';
import DeleteButton from '../../components/delete-button/delete-button.component';
import RequireLogin from '../../components/require-login/require-login.component';

const Hive = ({ user, currentHive, getHive, clearHive, getHiveId, createNewList, deleteHive, checkLocalStorage }) => {
    const params = useParams();
    const history = useHistory();
    // notification comes from redux somewhere
    const notification = false;

    console.log(useLocation())

    const [wrapperHeight, setWrapperHeight] = useState(399);
    const [hiveName, setHiveName] = useState('');
    const [newListName, setNewListName] = useState('');
    const [displayAddList, setDisplayAddList] = useState('none');
    const [displayError, setDisplayError] = useState('none');
    const [displayDeleteHive, setDisplayDeleteHive] = useState(0);
    const [errMsg, setErrMsg] = useState('');

    // set the height of .wrapper based on the height og the windows
    useEffect(() => {
        setWrapperHeight(window.innerHeight - 67);
        window.addEventListener('resize', () => {
            setWrapperHeight(window.innerHeight - 67)
        });

        return () => {
            clearHive();
            window.addEventListener('resize', () => {
                setWrapperHeight(window.innerHeight - 67)
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // get hive name from url with useParams hook
    useEffect(() => {
        setHiveName(params.hive_name);
        checkLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // get hvie after we have hive name
    useEffect(() => {
        if (user && hiveName) {
            getHive(user, hiveName);
            getHiveId(user, hiveName);

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hiveName, user])

    const handleCreateListBtn = () => {
        displayAddList ? setDisplayAddList('') : setDisplayAddList('none');
    };

    const handleAddListBtn = () => {
        if (newListName) {
            setDisplayAddList('none');
            setNewListName('');
            createNewList(user, { hiveId: currentHive.hiveId, newListName: newListName.trim() });
        }
    }

    const handleInput = (e) => {
        setNewListName(e.target.value);
        if (currentHive.data[e.target.value.trim()]) {
            setDisplayError('');
            setErrMsg('This name already exist!')
        } else if (!e.target.value.trim()) {
            setDisplayError('');
            setErrMsg("Name can't be empty")
        } else {
            setDisplayError('none');
        }
    }

    const handleDelete = () => {
        deleteHive(user, { hiveName, hiveId: currentHive.hiveId });
        history.push('/hives')
    }

    if (user) {
        return (
            <div className="hive">
                <Header2 notification={notification} />
                <div className="wrapper" style={{ height: `${wrapperHeight}px` }}>
                    <div className="hive-name" onMouseEnter={() => setDisplayDeleteHive(1)} onMouseLeave={() => setDisplayDeleteHive(0)}>
                        <h1>{hiveName} </h1>
                        <DeleteButton style={{ height: '25px', padding: '3px', opacity: displayDeleteHive, transition: 'all 300ms ease' }} handleClick={handleDelete} />
                    </div>
                    <div className="all-lists">
                        <div className="list-wrapper">
                            {currentHive.data ?
                                Object.values(currentHive.data).map(({ name, tasks, listId }) => {
                                    return <HiveList key={listId} listName={name} listId={listId} tasks={tasks} />
                                }
                                )
                                : ''
                            }
                            <div className="create-list" >
                                <p onClick={handleCreateListBtn} className='create-list-text' >+ Create List</p>
                                <div className='create-list-form' style={{ display: displayAddList }}>
                                    <input id='new-list-input' type="text" placeholder='Add list name...' value={newListName} onChange={e => handleInput(e)} />
                                    <div className='create-list-btn' onClick={handleAddListBtn} >Add List</div>
                                    <p className='add-list-error' style={{ display: displayError }}>{errMsg}</p>
                                </div>
                            </div>

                            {/* <p onClick={() => console.log(currentHive)}>check State</p> */}
                        </div>
                    </div>

                </div>
            </div>
        );
    } else {
        return <RequireLogin />
    }
};

const mapStateToProps = ({ user, currentHive }) => ({
    user,
    currentHive
})

const mapDispatchToProps = (dispatch) => ({
    getHive: (user, hiveName) => dispatch(getHive(user, hiveName)),
    clearHive: () => dispatch(clearHive()),
    getHiveId: (user, hiveName) => dispatch(getHiveId(user, hiveName)),
    createNewList: (user, data) => dispatch(createNewList(user, data)),
    deleteHive: (user, data) => dispatch(deleteHive(user, data)),
    checkLocalStorage: () => dispatch(checkLocalStorage()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Hive);
