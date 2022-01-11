//General
import React from "react"

//Material UI
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

//Pages
import Studio from "./pages/studio"

//Contexts

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Studio />;
    </ThemeProvider>
  )
}

export default App;
