import React, { useState } from 'react';
import App from './App';

const Test = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <App open={open} click={handleClick} />
    );
}
export default Test;