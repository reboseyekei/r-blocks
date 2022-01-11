import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#303345',
        },
        secondary: {
            main: '#19857b',
        },
        success: {
            main: '#1cbd0d',
        },
        error: {
            main: red.A400,
        },
        divider: {
            main: "#d2d9d4"
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;