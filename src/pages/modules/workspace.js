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
                name: "Library Functionality",
                colour: "#df456e",
                contents: [
                    {
                        kind: "block",
                        type: "lib",
                    },
                    {
                        kind: "block",
                        type: "req",
                    },
                ],
            },
            {
                kind: "category",
                name: "Statistical Analysis",
                colour: "#ed544c",
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
                name: "Data Visualization",
                colour: "#ed8f4c",
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
                        type: "gf_counts",
                    },
                    {
                        kind: "block",
                        type: "gf_point",
                    },
                    {
                        kind: "block",
                        type: "gf_qq",
                    },
                    {
                        kind: "block",
                        type: "mosaicplot",
                    },
                    

                ],
            }
        ],
    };

    function workspaceDidChange(workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        setJavascriptCode(code);
        document.getElementById('codeBody').innerText = code;
        
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

    const [selected, setSelected] = useState(0);
    const cards = ["Basic", "Data Wrangling", "Plots", "Statistics", "Modeling"];
    const colors = ["#ed544c", "#edd84c", "#7aed4c", "#824ced", "#ed4cc2"];
    // try adding js
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