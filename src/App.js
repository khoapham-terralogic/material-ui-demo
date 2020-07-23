import React from 'react';
import { makeStyles, ThemeProvider, } from '@material-ui/core'
import { Header, Sidebar, MyContainer } from './components'
import customTheme from './theme'


const useStyles = makeStyles(theme => ({
    rootContainer: {
        padding: theme.spacing(0),
        display: "flex",
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0)
        }
    },
}))
const App = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={customTheme}>
            <Header />
            <div className={classes.rootContainer}>
                <Sidebar />
                <MyContainer />
            </div>
        </ThemeProvider>
    );
}

export default App;
