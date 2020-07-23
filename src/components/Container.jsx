import React, { useState } from 'react';
import { makeStyles, Box, Button, Container, Grid, IconButton, TableRow, TableHead, Table, TableCell, TableBody, fade } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import FolderIcon from '@material-ui/icons/Folder';
import MyCard from './Card'
import Folder from './Folder';
import customTheme from '../theme';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        color: "#5f6368",
        [theme.breakpoints.up("md")]: {
            width: "85%",
        }
    },
    grow: {
        flexGrow: 1
    },
    header: {
        borderBottom: "1px solid #ddd",
        display: "flex"

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
        marginTop: theme.spacing(2)
    },
    folderContainer: {
        marginTop: theme.spacing(2)
    },
    listContainer: {
        marginTop: theme.spacing(2)
    },
    table: {
        minWidth: 650,
    },
    tableRow: {
        color: customTheme.textColor,
        fontSize: 12,
        transition: "color 0.5s",
        "&:hover": {
            cursor: "pointer",
            background: fade(theme.palette.common.black, 0.1)
        }
    },
    label: {
        fontSize: 14,
        fontWeight: 500
    },
    tableName: {
        display: "flex",
        flexDirection: "flex-start",
        alignItems: "center",
        color: customTheme.textColor
    }
}))
const MyContainer = () => {
    const [isList, setIsList] = useState(true)
    const files = [
        {
            title: "Thu cuối rồi cũng",
            img: "/images/tail.jpg",
            owner: "Me",
            timeStamp: "15 minutes ago"
        },
        {
            title: "qua nhanh",
            img: "/images/tailFlip.jpg",
            owner: "Me",
            timeStamp: "15 minutes ago"
        },
        {
            title: "cuốn theo cơn gió",
            img: "/images/tail.jpg",
            owner: "Me",
            timeStamp: "Just now"
        },
        {
            title: "lặng lẽ hòa tan",
            img: "/images/tailFlip.jpg",
            owner: "Me",
            timeStamp: "2 days ago"
        },
        {
            title: "vào trong một",
            img: "/images/head1.jpg",
            owner: "Me",
            timeStamp: "A week ago"
        },
        {
            title: "buổi chiều mưa vắng",
            img: "/images/idol.jpg",
            owner: "Me",
            timeStamp: "A week ago"
        }

    ]
    const folders = [
        {
            name: "Có lẽ nào..."
        },
        {
            name: "Em vội quên đi"
        },
        {
            name: "Có lẽ nào..."
        },
        {
            name: "Em đưa mùa thu đi"
        },
        {
            name: "Có lẽ nào..."
        },
        {
            name: "Mùa thu"
        },
        {
            name: "chẳng còn lại gì,"
        },
        {
            name: "trong tâm trí em"
        },
        {
            name: "Có lẽ nào..."
        },
        {
            name: "Có lẽ, có lẽ nào"
        }
    ]


    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Button className={classes.headerBtn}><div className={classes.btnContainer}><Box>My Drive</Box> <ArrowDropDownIcon /></div></Button>
                <div className={classes.grow} />
                <IconButton onClick={() => setIsList(!isList)}>
                    {isList ? <ViewListOutlinedIcon /> : <ViewModuleOutlinedIcon />}
                </IconButton>
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </div>
            <Container className={classes.quickContainer}>
                <div className={classes.label}>Quick Access</div>
                <Grid className={classes.quickContainer} spacing={2} container>
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
            {!isList ?
                <Container className={classes.listContainer}>
                    <div className={classes.label}>Files</div>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Owners</TableCell>
                                <TableCell align="right">Last modified</TableCell>
                                <TableCell align="right">File size</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {files.map((file, index) => (
                                <TableRow className={classes.tableRow} key={index}>
                                    <TableCell className={classes.tableName} component="th" scope="row">
                                        <FolderIcon />{file.title}
                                    </TableCell>
                                    <TableCell align="right">{file.owner}</TableCell>
                                    <TableCell align="right">{file.timeStamp}</TableCell>
                                    <TableCell align="right">NA</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Container>
                :
                <Container className={classes.quickContainer}>
                    <div className={classes.label}>Files</div>
                    <Grid className={classes.quickContainer} spacing={2} container>
                        {files.map((file, index) => (
                            <Grid key={index} item>
                                <MyCard file={file} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </div>
    );
}

export default MyContainer;
