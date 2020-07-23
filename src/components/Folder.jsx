import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1.5, 2),
        display: "flex",
        background: theme.palette.common.white,
        boxShadow: "0 1px 2px #ddd",
        border: "1px solid #ddd",
        borderRadius: theme.spacing(1),
        width: "14rem",
        maxWidth: 375,
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1, 1.5),
            withd: "auto",
        }
    },
    label: {
        marginLeft: theme.spacing(1),
        transition: "all 0.5s",
        [theme.breakpoints.down("md")]: {
            fontSize: 10
        }
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
