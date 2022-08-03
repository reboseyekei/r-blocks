//General
import React from 'react';

//Modules (No Minor Modules please)

//Icons

//Contexts

//Style
import "./styles/base.css";



export default function Sidebar() {
    //const text_code = document.getElementById('codeBody').value;
    //const link = 'https://rdrr.io/snippets/embed/?code=' + encodeURI(text_code)
    return (
        <div className="compiler">
            <div style={{ flex: 2 }}>
            </div>
            <div className="compiler-container" style={{ flex: 100 }}>
                <div style={{ flex: 1 }}>
                </div>
                
                

                
                
                <div>
                    
                    <iframe id="snippet" width='100%' height='800' src='https://rdrr.io/snippets/embed/?code=library(mosaic)' frameborder='0'>
                        Documentation Support: https://rdrr.io/snippets/embedding/
                    </iframe>

                    {/*<iframe src="https://jupyterlite.github.io/demo/repl/index.html?kernel=python&toolbar=1" width="100%" height="500px">
                    </iframe>*/}
                    
                    
                </div>
                
                {/*
                <div style={{ color: "white", flex: 100, background: "#1e1e1e", borderRadius: "2px" }}>
                    <body id = "URIBody"> 
                        <font size="+2">
                        <p>
                            
                        </p>
                        </font> 
                    </body>
                </div>
                */}

                

                




                
                <div style={{ flex: 1 }}>
                </div>
                {/*
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
                            
                            <button id = "copyButton" className="small-button" onclick = "copyCode()">
                                Copy
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                </div>
                */}
            
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

/*
// White Box at the top (before the exercise block)
<div className="output" style={{ flex: 40, background: "#fff", boxShadow: "rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem"}}>
                    
</div>
*/