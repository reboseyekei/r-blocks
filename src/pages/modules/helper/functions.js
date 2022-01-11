//General
import React from 'react';

function useSwitchState() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return [anchorEl, open, handleClick, handleClose]
}

export {useSwitchState}