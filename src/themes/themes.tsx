import {createTheme} from "@mui/material";

export const themes = createTheme({
    palette: {
        background: {
            default: "#CDD3D5"
        },
        primary: {
            light: "#CDD3D5",
            main: "#220C10",
            dark: "#506C64",

        },
        secondary: {
            light: "#F3E5F5",
            main: "#506C64",
            dark: "#AB47BC",
        },
        error: {
            light: "#e57373",
            main: "#E71D36",
            dark: "#d32f2f",
        },
        warning: {
            light:"#ffb74d",
            main:"#FF9F1C",
            dark:"#f57c00",
        },
        info: {
            light:"#506C64",
            main:"#506C64",
            dark:"#0288d1",
        },
        success: {
            light:"#81c784",
            main:"#77CBB9",
            dark:"#388e3c",
        },
    },
});
