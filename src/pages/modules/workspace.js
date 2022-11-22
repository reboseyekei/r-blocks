//General
import React, { useState } from 'react';

//Modules (No Minor Modules please)

//Icons
import FolderIcon from '@mui/icons-material/Folder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FiberNewIcon from '@mui/icons-material/FiberNew';

//Blockly
import Blockly from "blockly";
import { BlocklyWorkspace } from "react-blockly";
import "./blockly/blocks";

//Contexts

//Style
import "./styles/base.css";

export default function Workspace() {
    const [xml, setXml] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");

    const initialXml =
        '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
    const toolboxCategories = {
        kind: "categoryToolbox",
        contents: [
            {
                kind: "category",
                name: "General Functionality (using HELPrct)",
                colour: "20",
                contents: [
                    {
                        kind: "block",
                        type: "lib",
                    },
                    {
                        kind: "block",
                        type: "names",
                    },
                    {
                        kind: "block",
                        type: "glimpse",
                    },
                    {
                        kind: "block",
                        type: "head",
                    },
                    {
                        kind: "block",
                        type: "tail",
                    },
                    {
                        kind: "block",
                        type: "help",
                    },
                ],
            },
            {
                kind: "category",
                name: "General Functionality",
                colour: "20",
                contents: [
                    {
                        kind: "block",
                        type: "Glib",
                    },
                    {
                        kind: "block",
                        type: "Gnames",
                    },
                    {
                        kind: "block",
                        type: "Gglimpse",
                    },
                    {
                        kind: "block",
                        type: "Ghead",
                    },
                    {
                        kind: "block",
                        type: "Gtail",
                    },
                    {
                        kind: "block",
                        type: "Ghelp",
                    },
                ],
            },
            {
                kind: "category",
                name: "Numerical Summaries (using HELPrct)",
                colour: "230",
                contents: [
                    {
                        kind: "block",
                        type: "tallydata",
                    },
                    {
                        kind: "block",
                        type: "tallydataformat",
                    },
                    {
                        kind: "block",
                        type: "tallysexdata",
                    },
                    {
                        kind: "block",
                        type: "tallysexdata2",
                    },
                    {
                        kind: "block",
                        type: "tallysexformatdata",
                    },
                    {
                        kind: "block",
                        type: "favstatsdata",
                    },
                    {
                        kind: "block",
                        type: "favstatssubstancedata",
                    },
                    {
                        kind: "block",
                        type: "favstatssubstancedata2",
                    },
                    {
                        kind: "block",
                        type: "cor",
                    },
                ],
            },
            {
                kind: "category",
                name: "Numerical Summaries",
                colour: "230",
                contents: [
                    {
                        kind: "block",
                        type: "Gtallydata",
                    },
                    {
                        kind: "block",
                        type: "Gtallydataformat",
                    },
                    {
                        kind: "block",
                        type: "Gtallysexdata",
                    },
                    {
                        kind: "block",
                        type: "Gtallysexdata2",
                    },
                    {
                        kind: "block",
                        type: "Gtallysexformatdata",
                    },
                    {
                        kind: "block",
                        type: "Gfavstatsdata",
                    },
                    {
                        kind: "block",
                        type: "Gfavstatssubstancedata",
                    },
                    {
                        kind: "block",
                        type: "Gfavstatssubstancedata2",
                    },
                    {
                        kind: "block",
                        type: "Gcor",
                    },
                ],
            },
            {
                kind: "category",
                name: "Data Visualization (using HELPrct)",
                colour: "120",
                contents: [
                    {
                        kind: "block",
                        type: "gf_bar",
                    },
                    {
                        kind: "block",
                        type: "pie",
                    },
                    {
                        kind: "block",
                        type: "gf_counts",
                    },
                    {
                        kind: "block",
                        type: "gf_percents",
                    },
                    {
                        kind: "block",
                        type: "mosaicplot",
                    },
                    {
                        kind: "block",
                        type: "gf_boxplot",
                    },
                    {
                        kind: "block",
                        type: "gf_boxplot_substance",
                    },
                    {
                        kind: "block",
                        type: "gf_histogram",
                    },
                    {
                        kind: "block",
                        type: "gf_histogram_substance",
                    },
                    {
                        kind: "block",
                        type: "gf_dens",
                    },
                    {
                        kind: "block",
                        type: "gf_dens_color",
                    },
                    {
                        kind: "block",
                        type: "gf_point",
                    },
                ],
            },
            {
                kind: "category",
                name: "Data Visualization",
                colour: "120",
                contents: [
                    {
                        kind: "block",
                        type: "Ggf_bar",
                    },
                    {
                        kind: "block",
                        type: "Gpie",
                    },
                    {
                        kind: "block",
                        type: "Ggf_counts",
                    },
                    {
                        kind: "block",
                        type: "Ggf_percents",
                    },
                    {
                        kind: "block",
                        type: "Gmosaicplot",
                    },
                    {
                        kind: "block",
                        type: "Ggf_boxplot",
                    },
                    {
                        kind: "block",
                        type: "Ggf_boxplot_substance",
                    },
                    {
                        kind: "block",
                        type: "Ggf_histogram",
                    },
                    {
                        kind: "block",
                        type: "Ggf_histogram_substance",
                    },
                    {
                        kind: "block",
                        type: "Ggf_dens",
                    },
                    {
                        kind: "block",
                        type: "Ggf_dens_color",
                    },
                    {
                        kind: "block",
                        type: "Ggf_point",
                    },
                ],
            },
            {
                kind: "category",
                name: "Statistical Inference (using HELPrct)",
                colour: "#039be5",
                contents: [
                    {
                        kind: "block",
                        type: "proptest",
                    },
                    {
                        kind: "block",
                        type: "proptest2",
                    },
                    {
                        kind: "block",
                        type: "ttest",
                    },
                    {
                        kind: "block",
                        type: "ttest2",
                    },
                    {
                        kind: "block",
                        type: "xchisqtest",
                    },
                    {
                        kind: "block",
                        type: "anova",
                    },
                    {
                        kind: "block",
                        type: "slrsummary",
                    },
                ],
            },
            {
                kind: "category",
                name: "Statistical Inference",
                colour: "#039be5",
                contents: [
                    {
                        kind: "block",
                        type: "Gproptest",
                    },
                    {
                        kind: "block",
                        type: "Gproptest2",
                    },
                    {
                        kind: "block",
                        type: "Gttest",
                    },
                    {
                        kind: "block",
                        type: "Gttest2",
                    },
                    {
                        kind: "block",
                        type: "Gxchisqtest",
                    },
                    {
                        kind: "block",
                        type: "Ganova",
                    },
                    {
                        kind: "block",
                        type: "Gslrsummary",
                    },
                ],
            }
        ],
    };

    function workspaceDidChange(workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        //setJavascriptCode(code);
        //document.getElementById('codeBody').innerText = code;
        const linked = 'https://rdrr.io/snippets/embed/?code=' + encodeURI(code)
        //document.getElementById('URIBody').innerText = linked;
        document.getElementById('snippet').src = linked;
    }

    /*
    function myUpdateFunction(event) {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById('codeBody').value = code;
        document.getElementById('outputCode').value = code;
    }
    workspace.addChangeListener(myUpdateFunction);
    */
   

    // reference: https://developers.google.com/blockly/guides/configure/web/code-generators#realtime_generation

    
    
    return (
        <BlocklyWorkspace
            className="blockly"
            toolboxConfiguration={toolboxCategories}
            initialXml={initialXml}
            workspaceConfiguration={{
                grid: {
                    spacing: 20,
                    length: 3,
                    colour: "#ccc",
                    snap: true,
                },
            }}
            onWorkspaceChange={workspaceDidChange}
            onXmlChange={setXml}
        />
        

    )
}