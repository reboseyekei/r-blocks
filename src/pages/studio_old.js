//General
import React from 'react';

//Material-UI
import Box from '@mui/material/Box';

//Modules (No Minor Modules please)
import Topbar from './modules/topbar';
import Core from './modules/core';

//Contexts

export default function Studio() {
    return (
        <Box style={{ height: "100%" }}>
            <Topbar />
            <Core />
        </Box>
    )
}