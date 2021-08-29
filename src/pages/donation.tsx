import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    layout: {

        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function Donation() {
    const classes = useStyles();

    const fName = useRef();
    const lName = useRef();
    const email = useRef();
    const contact = useRef();
    const address = useRef();
    const donateAmount = useRef();
    const description = useRef();

    const [campaignVal, setCampaignVal] = React.useState('');
    const [campaignId, setCampaignId] = React.useState('');
    const [campaignName, setCampaignName] = React.useState('');


    useEffect(() => {
        getCampaigns();
    }, [])


    const getCampaigns = () =>{
        
    }
    

    const handleCampaignChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCampaignVal(event.target.value as string);
        let temp:string = String(event.target.value);
        let campArr:any[] = temp ? temp.split("||") : [];
        console.log(campArr);
        setCampaignId(campArr[0]);
        setCampaignName(campArr[1]);
    };



    return (
        <React.Fragment>
            <main className={classes.layout}>
                <form method="POST" action="https://donation.makeadifference.lk/Checkout.php">
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Donations
                        </Typography>
                        <br/><br/>
                        <React.Fragment>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={campaignVal}
                                        onChange={handleCampaignChange}
                                        style={{'width':'100%'}}
                                        label="Select the campaign"
                                        required
                                    >
                                        <MenuItem value="" selected disabled>Select the campaign</MenuItem>
                                        <MenuItem value="1||Bikeathon">Bikeathon</MenuItem>
                                        <MenuItem value="2||Test2">Test2</MenuItem>
                                        <MenuItem value="3||Test3">Test3</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="mobileNo"
                                        name="mobileNo"
                                        label="Contact"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address1"
                                        name="address1"
                                        label="Address line 1"
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="donateAmount"
                                        name="donateAmount"
                                        label="Donation Amount"
                                        fullWidth
                                        autoComplete="given-name"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="description"
                                        name="description"
                                        label="Description"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{'display': 'none'}}>
                                    <TextField
                                        required
                                        id="currentVal"
                                        name="currentVal"
                                        fullWidth
                                        defaultValue="1000"
                                    />

                                    <TextField
                                        required
                                        id="campaignName"
                                        name="campaignName"
                                        fullWidth
                                        defaultValue="Bikeathon"
                                        value={campaignName}
                                    />

                                    <TextField
                                        required
                                        id="campaignId"
                                        name="campaignId"
                                        fullWidth
                                        defaultValue="12"
                                        value={campaignId}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <div className={classes.buttons}>
                                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                    Proceed
                                </Button>
                            </div>
                        </React.Fragment>
                    </Paper>
                </form>
            </main>
        </React.Fragment>
    );
}

