//General
import React from 'react';

//Modules (No Minor Modules please)

//Icons

//Contexts

//Style
import "./styles/base.css";

export default function Sidebar() {

    return (
        <div className="compiler">
            <div style={{ flex: 2 }}>
            </div>
            <div className="compiler-container" style={{ flex: 100 }}>
                <div style={{ flex: 1 }}>
                </div>
                <div className="output" style={{ flex: 40, background: "#fff", boxShadow: "rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem"}}>
                </div>
                <div style={{ flex: 1 }}>
                </div>
                <div className="output" style={{ flex: 20 }}>
                    <div className="code">
                        <div style={{ color: "white", flex: 4, background: "#1e1e1e", borderRadius: "2px" }}>
                            <body> 
                                <p>
                                    Code gets updated here!
                                </p> 
                            </body>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            <button className="small-button">
                                Show R code
                            </button>
                            <button className="small-button">
                                Copy
                            </button>
                            <button className="small-button">
                                Live Coding
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                </div>
            </div>
            <div style={{ flex: 1 }}>
            </div>
        </div>
    )
}