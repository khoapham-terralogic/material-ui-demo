import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 375,
        width: "13rem"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}))
const MyCard = ({ file: { title, img } }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography className={classes.title}>{title}</Typography>
                <Typography gutterBottom className={classes.pos} color="textSecondary">
                    You edited today
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MyCard;
