import React from 'react';
import { makeStyles, Typography, Box, Button, Container, Grid } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import MyCard from './Card'
import Folder from './Folder';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        width: "85%",
        color: "#5f6368",
    },
    header: {
        borderBottom: "1px solid #ddd"
    },
    headerBtn: {
        padding: theme.spacing(1, 2),
        margin: theme.spacing(.5, 0),
        textTransform: "capitalize"
    },
    btnContainer: {
        display: "flex",
    },
    quickContainer: {
        marginTop: theme.spacing(1)
    },
    folderContainer: {
        marginTop: theme.spacing(1)
    }
}))
const MyContainer = () => {
    const files = [
        {
            title: "Hentai",
            img: "/images/avatar.jpg"
        },
        {
            title: "Porn",
            img: "/images/idol.jpg"
        },
        {
            title: "Asia",
            img: "/images/jisoo.jpg"
        },
        {
            title: "Fake taxi",
            img: "/images/idol.jpg"
        },
        {
            title: "Public agents",
            img: "/images/jisoo.jpg"
        }
    ]
    const folders = [
        {
            name: "Phim sex hay"
        },
        {
            name: "Phim sex tuyen chon"
        },
        {
            name: "Phim sex top"
        },
        {
            name: "Phim sex chau a"
        },
        {
            name: "Phim sex chau au"
        },
        {
            name: "Phim sex chau my"
        },
        {
            name: "Phim sex gay"
        },
        {
            name: "Phim sex les"
        }
    ]


    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Button className={classes.headerBtn}><div className={classes.btnContainer}><Box>My Drive</Box> <ArrowDropDownIcon /></div></Button>
            </div>
            <Container className={classes.quickContainer}>
                <div className={classes.label}>Quick Access</div>
                <Grid className={classes.quickContainer} spacing={5} container>
                    {files.map((file, index) => (
                        <Grid key={index} item>
                            <MyCard file={file} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container className={classes.folderContainer}>
                <div className={classes.label}>Folders</div>
                <Grid className={classes.folderContainer} spacing={2} container>
                    {folders.map((folder, index) => (
                        <Grid key={index} item>
                            <Folder folder={folder} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container className={classes.quickContainer}>
                <div className={classes.label}>Files</div>
                <Grid className={classes.quickContainer} spacing={5} container>
                    {files.map((file, index) => (
                        <Grid key={index} item>
                            <MyCard file={file} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default MyContainer;
