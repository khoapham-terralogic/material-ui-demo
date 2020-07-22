import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1.5, 2),
        display: "flex",
        background: theme.palette.common.white,
        boxShadow: "0 1px 2px #ddd",
        borderRadius: theme.spacing(1),
        border: "1px solid #ddd",
        width: "14rem",
        maxWidth: 375,
    },
    label: {
        marginLeft: theme.spacing(1)
    }
}))


const Folder = ({ folder: { name } }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FolderIcon />
            <Box className={classes.label}>{name}</Box>
        </div>
    );
}

export default Folder;
