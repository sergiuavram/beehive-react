import React from 'react';
import './hive-tab.style.scss';

import { useHistory } from "react-router-dom"

const HiveTab = ({ hive }) => {
    const history = useHistory();

    const handleClick = () => {
        // history.push(`/hives/${name}`);
        const newName = hive.Name.replace(/ /g, '-')
        history.push({ pathname: `/hives/${hive.Id}`, state: { test1: 1111, test2: 2222 }, hash: newName });
    }

    return (
        <div className="hive-tab" onClick={handleClick}>
            {hive.Name}
        </div>
    );
};

export default HiveTab;
