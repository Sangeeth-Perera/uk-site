import { Box, Button, Center, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../components/blogPost";
import Loading from "../components/loading";
import { Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { API } from "../../config";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
interface Props { }

const useStyles = makeStyles((theme) => ({
    layout: {

        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 900,
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


const SignUp: React.FC<Props> = () => {
    const classes = useStyles();
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [form, setForm] = useState<any>({});
    const [submitEnable, setSubmitEnable] = useState(false);

    const router: any = useRouter();
    const user = useSelector((state: RootState) => state.user);
    if (user.authenticated) {
        router.push('/');
    }

    const handleFormChange = (event: any) => {
        let fieldName: string = String(event.target.name);
        let value: string = event.target.value;
        if (form.username && form.email && form.password) {
            setSubmitEnable(true);
        }
        else {
            setSubmitEnable(false);
        }
        form[fieldName] = value;
        setForm(form);
    }

    const handleSubmit = async () => {
        try {
            if (form.password == form.rePassword) {
                const response: any = await axios.post(`${API}/users`, form);
                toast("User Created Successfully");
                router.push('/login')
            }
            else {
                setErrorText("Passwords does not match");
            }
        } catch (error: any) {
            setErrorText("User Name or Email is already taken");
            toast("Please enter valid information");
        }

    }
    const handleReset = () => {
        router.push('/')
    }

    return (
        <main className={classes.layout}>
            <Paper elevation={2} style={{ width: "100%", borderRadius: "10px", padding: '20px 20px 20px 20px', marginTop: '60px', marginBottom: '60px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={2} lg={12}>
                        <Heading marginY="25px"><Center>Sign Up</Center></Heading>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Typography color="secondary">{errorText}</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            name="username"
                            id="standard-password-input"
                            label="User Name"
                            type="text"
                            required
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            name="lastName"
                            id="Last Name"
                            label="Last Name"
                            type="text"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            id="standard-password-input"
                            label="Email"
                            name="email"
                            type="email"
                            required
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            id="standard-password-input"
                            label="Contact Number"
                            name="contactNumber"
                            type="text"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            id="standard-password-input"
                            label="Re-Password"
                            name="rePassword"
                            type="password"
                            fullWidth
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button w="100%" type="reset" fullWidth onClick={handleReset}>Cancel</Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button w="100%" type="submit" fullWidth disabled={!submitEnable} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}

export default SignUp;