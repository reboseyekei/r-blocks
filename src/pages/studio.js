//General
import React from 'react';

//Modules (No Minor Modules please)
import Toolbar from "./modules/toolbar"
import Sidebar from "./modules/sidebar"
import Workspace from "./modules/workspace"
import Compiler from "./modules/compiler"

//Contexts

export default function Studio() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Toolbar />
            <div className="core">
                <div style={{ flex: 2 }}>
                    <Sidebar />
                </div>
                <div style={{ flex: 4 }}>
                    <Workspace />
                </div>
                <div style={{ flex: 3 }}>
                    <Compiler />
                </div>
            </div>
        </div>
    )
}