import React from 'react';
import { makeStyles, } from '@material-ui/core'
import { Header, Sidebar, MyContainer } from './components'


const useStyles = makeStyles(theme => ({
    rootContainer: {
        padding: theme.spacing(0, 1),
        display: "flex",
    }
}))
const App = () => {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <div className={classes.rootContainer}>
                <Sidebar />
                <MyContainer />
            </div>
        </div>
    );
}

export default App;
