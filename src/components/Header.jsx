import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Box, InputBase, fade, IconButton, Badge, Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        position: "relative",
        background: "#fff",
        borderBottom: "1px solid #ddd"
    },
    navContainer: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            flexWrap: "no-wrap"
        },
    },
    logoContainer: {
        width: "15%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#5f6368"
    },
    mainContainer: {
        width: "85%",
        display: "flex"
    },
    img: {
        maxWidth: "100%",
        width: "40px",
        height: "40px"

    },
    search: {
        color: "#5f6368",
        display: "flex",
        alignItems: "center",
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.05),
        },
        '&:focus': {
            boxShadow: "0 1px 2px 0 #888",
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '60%',
        },

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#5f6368"
    },
    dropDownIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        right: theme.spacing(1),
        color: "#5f6368"
    },
    inputRoot: {
        color: 'inherit',
        width: "100%",
        paddingRight: theme.spacing(1)
    },
    inputInput: {
        fontSize: 18,
        color: "#5f6368",
        fontWeight: 400,
        padding: theme.spacing(1, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(0.1em + ${theme.spacing(0)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
        "&:focus $search": {
            background: fade(theme.palette.common.white, .75)
        }
    },
    sectionDesktop: {
        color: "#5f6368",
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: "center"
        },
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.grow}>
            <AppBar elevation={0} className={classes.root}>
                <Toolbar className={classes.navContainer}>
                    <div className={classes.logoContainer}>
                        <img className={classes.img} src="/assets/google-drive.svg" alt="drive" />
                        <Box fontSize={23} fontWeight={400}>Drive</Box>
                    </div>
                    <Box className={classes.mainContainer} component="div">
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search in Drive"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <div className={classes.dropDownIcon}>
                                <ArrowDropDownIcon />
                            </div>

                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="question mark" color="inherit">
                                <HelpOutlineOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="setting icon" color="inherit">
                                <SettingsOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="app icon" color="inherit">
                                <AppsIcon />
                            </IconButton>
                            <Avatar alt="Avatar" src="/images/avatar.jpg" className={classes.small} />
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
