//General
import React, { useRef } from 'react';

//Material-UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

//Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';

//Scrollbar
import { Scrollbar } from "smooth-scrollbar-react";

//Modules (Major only)

//Contexts

//Helpers
import { useSwitchState } from './helper/functions';

export default function Core() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const options = ["Basic", "Data", "Wrangling", "Plots", "Statistics", "Modeling"];
    return (
        <Grid container direction="row" alignItems="stretch" sx={{ height: "100%" }}>
            <Grid item xs={2}>
                <Grid container alignItems="stretch" sx={{ height: "100%" }}>
                    <Grid item xs={4}>
                        <List style={{ height: "100%", backgroundColor: "#92c6e8" }}>
                            {options.map(((option, index) => (
                                <ListItem disablePadding>
                                    <ListItemButton 
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index)}>
                                        <ListItemText primary={option} sx={{ color: "#FDFEFE" }} />
                                    </ListItemButton>
                                </ListItem>
                            )))}
                        </List>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "#cacee3" }}>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ backgroundColor: "#f0f0f5", height: "100%", width: "100%", borderRadius: 0 }} elevation={8}>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{width: "100%", height: "50%"}}>
                
                </Box>
                <Box sx={{width: "100%", height: "50%", backgroundColor: "#131414"}}>

                </Box>
            </Grid>
        </Grid >
    )
}