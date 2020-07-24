import { createMuiTheme } from '@material-ui/core';

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#4285f4"
        },
        secondary: {
            main: "#ddd"
        },
        purple: {
            main: "#4285f4"
        }
    },
    textColor: "#555",
    greyBorder: "1px solid #ddd",
})
export default customTheme