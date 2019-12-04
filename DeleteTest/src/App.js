import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const App = () => {

    const handleClick = () => {
        alert("asdf");
    }
    return (
        <>
            <IconButton onClick={handleClick}>
                <DeleteIcon />
            </IconButton>
        </>
    )
};

export default App;