//General
import React from 'react';

//Modules (No Minor Modules please)

//Icons
import FolderIcon from '@mui/icons-material/Folder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FiberNewIcon from '@mui/icons-material/FiberNew';

//Contexts
import { useSwitchState } from './helper/functions';

//Style
import "./styles/base.css";

export default function Toolbar() {

    return (
        <nav className="toolbar">
            <ul style={{ width: "100%", flex: 1 }}>
                <h1 className="header">RBlocks</h1>
            </ul>
            <div style={{ width: "100%", flex: 6 }}>
                {/*
                <button className="base-button">
                    packages
                </button>
                <button className="base-button">
                    upload
                </button>
                <button className="base-button">
                    tutorials
                </button>
                 */}
            </div>
            <div style={{ width: "100%", flex: 1 }}>
                {/*
                <button className="icon-button run-button">
                    <PlayArrowIcon fontSize="large" sx={{ml: "-2px", mb: "-1px"}}/>
                </button>
                <button className="icon-button stop-button">
                    <DangerousIcon fontSize="large"  sx={{ml: "-2px", mb: "-1px"}}/>
                </button>
                <button className="icon-button reset-button">
                    <FiberNewIcon fontSize="large" sx={{ml: "-2px", mb: "-1px"}}/>
                </button>
                 */}
            </div>
        </nav>
    )
}