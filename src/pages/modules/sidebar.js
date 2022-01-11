//General
import React from 'react';

//Modules (No Minor Modules please)

//Icons
import FolderIcon from '@mui/icons-material/Folder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FiberNewIcon from '@mui/icons-material/FiberNew';

//Contexts

//Style
import "./styles/base.css";

export default function Sidebar() {

    return (
        <div className="side">
            <div className="side-list">
                <div className="card">Basic</div>
                <div className="card">Data</div>
                <div className="card">Wrangling</div>
                <div className="card">Plots</div>
                <div className="card">Statistics</div>
                <div className="card">Modeling</div>
            </div>
            <div className="side-area">
                
            </div>
        </div>
    )
}