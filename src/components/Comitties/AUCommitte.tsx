import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import styles from "./Committe.module.css";
import List from "@material-ui/core/List";
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CommuteIcon from '@material-ui/icons/Commute';
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(18),
            height: theme.spacing(22),
        },
        justifyContent: "center",
        padding: "20px"
    },
}));

const AUCommitte = () => {

    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman

                </Typography>
            </Paper>

            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <img src="https://dummyimage.com/145x130/000/fff" alt=""/>
                <Typography className={styles.categoryNames}>
                    Suresh Mendis<br/>
                    Chairman
                </Typography>
            </Paper>
        </div>
        </>
    )
}

export default AUCommitte;