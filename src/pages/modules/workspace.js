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
                name: "Basic",
                colour: "#ed544c",
                contents: [
                    {
                        kind: "block",
                        type: "controls_if",
                    },
                    {
                        kind: "block",
                        type: "logic_compare",
                    },
                    {
                        kind: "block",
                        type: "math_round",
                    },
                    {
                        kind: "block",
                        type: "math_number",
                    },
                    {
                        kind: "block",
                        type: "new_boundary_function",
                    },
                    {
                        kind: "block",
                        type: "library",
                    },
                ],
            },
            {
                kind: "category",
                name: "Data Wrangling",
                colour: "#ed8f4c",
                contents: [
                    {
                        kind: "block",
                        type: "lib",
                    },
                    {
                        kind: "block",
                        type: "req",
                    },
                    {
                        kind: "block",
                        type: "tallydata",
                    },
                    {
                        kind: "block",
                        type: "tallydataformat",
                    },
                ],
            }
        ],
    };

    function workspaceDidChange(workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        setJavascriptCode(code);
    }


    const [selected, setSelected] = useState(0);
    const cards = ["Basic", "Data Wrangling", "Plots", "Statistics", "Modeling"];
    const colors = ["#ed544c", "#edd84c", "#7aed4c", "#824ced", "#ed4cc2"];

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