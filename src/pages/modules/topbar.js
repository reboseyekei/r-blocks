//General
import React from 'react';

//Material-UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { styled, alpha } from '@mui/material/styles';

//Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import DangerousIcon from '@mui/icons-material/Dangerous';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

//Modules (Major only)

//Contexts

//Helpers
import { useSwitchState } from './helper/functions';


//Stylized Menu
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(0.5),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '2px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(0.2),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function Topbar() {
    const [anchorPackages, openPackages, clickPackages, closePackages] = useSwitchState();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar variant="dense" sx={{ justifyContent: "start" }}>
                    <Typography variant="h5" sx={{ mr: "2%" }}>
                        R-Blocks
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button
                            id="packages"
                            onClick={clickPackages}
                            variant="contained" sx={{ mr: "1%" }}
                            endIcon={<KeyboardArrowDownIcon />}
                            aria-controls={openPackages ? 'packages' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openPackages ? 'true' : undefined} color="secondary"
                        >Packages</Button>
                        <StyledMenu
                            id="packages"
                            anchorEl={anchorPackages}
                            open={openPackages}
                            onClose={closePackages}
                            MenuListProps={{
                                'aria-labelledby': 'packages',
                            }}
                        >
                            <MenuItem onClick={closePackages}>mosaic</MenuItem>
                            <MenuItem onClick={closePackages}>ggplot</MenuItem>
                            <Divider variant="middle" flexItem />
                            <MenuItem onClick={closePackages}>
                                <ListItemText>
                                    import
                                </ListItemText>
                                <SearchIcon fontSize="small" />
                            </MenuItem>
                        </StyledMenu>
                        <Button color="secondary" variant="contained" sx={{ mr: "1%" }} endIcon={<FolderIcon />}>Upload</Button>
                        <Button color="secondary" variant="contained" sx={{ mr: "1%" }}>Tutorials</Button>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <IconButton aria-label="run code" size="large" color="success">
                        <PlayCircleFilledWhiteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="run code" size="large" color="error">
                        <DangerousIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="run code" size="large" color="info">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}