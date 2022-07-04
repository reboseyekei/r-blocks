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

                <div class="exercise">
                    <div class="title">
                    <h2>How it works</h2>
                    </div>
                    <div data-datacamp-exercise data-lang="r" data-height="500">
                    <code data-type="pre-exercise-code"># no pec</code>
                    <code id="outputCode" data-type="sample-code">
                        
                        3 + 4
                        
                    </code>
                    
                    
                    <div data-type="hint">
                        <p>Just add a line of R code that calculates the sum of 6 and 12, just like the
                        example
                        in the sample code!</p>
                    </div>
                    </div>
                </div>
                





            
                <div style={{ flex: 1 }}>
                </div>
                <div className="output" style={{ flex: 20 }}>
                    <div className="code">
                        <div style={{ color: "white", flex: 100, background: "#1e1e1e", borderRadius: "2px" }}>
                            <body id = "codeBody"> 
                                <font size="+2">
                                <p>
                                    
                                    
                                </p>
                                </font> 
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


/*

// This should be added in the complier element above in order to connect with the datacamp API

<div class="exercise">
    <div class="title">
    <h2>How it works</h2>
    </div>
    <div data-datacamp-exercise data-lang="r" data-height="500">
    <code data-type="pre-exercise-code"># no pec</code>
    <code data-type="sample-code">
        
        3 + 4
    </code>
    
    
    <div data-type="hint">
        <p>Just add a line of R code that calculates the sum of 6 and 12, just like the
        example
        in the sample code!</p>
    </div>
    </div>
</div>
*/