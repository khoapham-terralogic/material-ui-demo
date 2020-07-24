import React from 'react';
import { makeStyles, Button, fade, Typography, Box, LinearProgress } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import GroupIcon from '@material-ui/icons/Group';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import StorageIcon from '@material-ui/icons/Storage';
import customTheme from '../theme';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        position: "relative",
        transition: "all ease 0.5s",
        width: "7%",
        [theme.breakpoints.up("md")]: {
            width: "15%",
        }
    },
    button: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            background: "#fff",
            borderRadius: "14rem",
            margin: theme.spacing(2, 0, 0, 2),
            padding: theme.spacing(1.5, 3),
            color: customTheme.textColor,
            fontSize: 13,
            "&:hover": {
                background: fade(theme.palette.common.black, 0.05)
            },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }
    },
    navList: {
        borderBottom: "1px solid #ddd",
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
    },
    secondNavList: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(1),
            width: "70%",
            float: "right",
            display: "block"
        }
    },
    navLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: theme.spacing(1, 2),
        color: "#5f6368",
        transition: "all 0.5s",
        '&:hover': {
            background: fade(theme.palette.common.black, 0.1),
            cursor: "pointer",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            [theme.breakpoints.down("sm")]: {
                background: "none"
            }
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2, 0.5),
        }
    },
    label: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            color: "#5f6368",
            fontSize: 14,
            fontWeight: 500,
            margin: theme.spacing(0, 3),
            display: "block"
        }
    },
    link: {
        color: "#15c",
        fontSize: 13,
        textTransform: "capitalize",
        fontWeight: 500
    },
    progress: {
        color: customTheme.palette.purple,
        background: fade(theme.palette.common.black, .1)
    },
    btn: {
        marginTop: theme.spacing(2)
    }
}))
const Sidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                >
                    <AddOutlinedIcon />
                    <Box>New</Box>
                </Button>
                <div className={classes.navList}>
                    <div className={classes.navLink}><AllInboxIcon /><Box className={classes.label}>My Drive</Box></div>
                    <div className={classes.navLink}><GroupIcon /><Box className={classes.label}>Shared with me</Box></div>
                    <div className={classes.navLink}><QueryBuilderIcon /><Box className={classes.label}>Recent</Box></div>
                    <div className={classes.navLink}><StarBorderIcon /><Box className={classes.label}>Starred</Box></div>
                    <div className={classes.navLink}><DeleteIcon /><Box className={classes.label}>Trash</Box></div>
                </div>
                <div className={classes.navLink}><StorageIcon /><Box className={classes.label}>Storage</Box></div>
                <div className={classes.secondNavList}>
                    <div><Box fontSize={13} fontWeight={400} style={{ color: "#5f6368" }}>8.6 GB of 15 GB used</Box></div>
                    <LinearProgress className={classes.progress} variant="determinate" value={8.6 / 15 * 100} />
                    <Button className={classes.btn}><Typography className={classes.link}>Buy storage</Typography></Button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
