import React, { useState } from 'react';
import Restaurants from '../Restaurants'

const DataClean = () => {
    const [opening, setOpening] = useState(false);

    const handleClick = ({ data }) => {
        setOpening(!opening);
        console.log(data);
    }
    return (
        <Restaurants open={opening} click={handleClick} />
    );
}
export default DataClean;