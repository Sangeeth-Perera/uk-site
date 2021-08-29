import { Box, Button, Center, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../components/blogPost";
import Loading from "../components/loading";
import { Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { API } from "../../config";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../store/UserSlice";
import { RootState } from "../store";
import { setDefaultHeader } from "../services/interceptor";

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

export default function SignIn() {
    const classes = useStyles();

    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [form, setForm] = useState<any>({});
    const [submitEnable, setSubmitEnable] = useState(false);
    const dispatch = useDispatch();
    const router: any = useRouter();
    const user = useSelector((state: RootState) => state.user);

    if (user.authenticated) {
        router.push('/');
    }
    const handleFormChange = (event: any) => {
        let fieldName: string = String(event.target.name);
        let value: string = event.target.value;
        if (form.identifier && form.password) {
            setSubmitEnable(true);
        }
        else {
            setSubmitEnable(false);
        }
        form[fieldName] = value;
        setForm(form);
    }

    const handleReset = () => {
        router.push('/')
    }

    const handleSignUp = () => {
        router.push('/sign-up')
    }


    const handleSubmit = async () => {
        try {
            const response: any = await axios.post(`${API}/auth/local`, form);
            dispatch(setUser({ ...response.data.user, authenticated: true }));
            dispatch(setToken(response.data.jwt));
            setDefaultHeader('Authorization', response.data.jwt);
            sessionStorage.setItem("token", response.data.jwt);
            sessionStorage.setItem("user", JSON.stringify({ ...response.data.user, authenticated: true }));
            toast("User Logged in Successfully");
            router.push('/dashboard');
        } catch (error: any) {
            setErrorText("Please enter valid user Credentails");
            toast("Please enter valid user Credentails");
        }

    }

    return (
        <main className={classes.layout}>
        <Paper elevation={2} style={{ width: "100%", borderRadius:"10px", padding: '20px 20px 20px 20px',marginTop:'60px', marginBottom:'60px' }}>
            <Grid container>
                <Grid item xs={12} lg={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                            <Typography align="center" style={{ fontSize: "32px"}}>Login</Typography>
                            <Typography align="center" color="secondary">{errorText}</Typography>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <TextField
                                name="identifier"
                                id="User Name"
                                label="User Name"
                                type="text"
                                autoComplete="current-password"
                                variant="outlined"
                                fullWidth
                                onChange={handleFormChange}
                            />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                name="password"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                                variant="outlined"
                                onChange={handleFormChange}
                            />
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <Button w="100%" type="submit" fullWidth disabled={!submitEnable} onClick={handleSubmit}>Login</Button>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <Button w="100%" type="reset" fullWidth onClick={handleReset}>Cancel</Button>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <Button style={{ border:1, backgroundColor: "#c48f0a", color: "#FFF" }} w="100%" type="reset" fullWidth onClick={handleSignUp}>Sign Up</Button>
                            <Typography align="center">(If you do not have an Account)</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </Paper >
        </main>
    );
}
