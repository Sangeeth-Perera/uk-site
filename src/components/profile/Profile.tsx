import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { CircularProgress, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../../../config";

interface Props { }

const Profile: React.FC<Props> = () => {

    const [userInfo, setUserInfo] = useState<any>();
    const [errorText, setErrorText] = useState('');
    const [form, setForm] = useState<any>({});
    const [submitEnable, setSubmitEnable] = useState(false);


    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            const response = await axios.get(`${API}/users/me`);
            setUserInfo(response.data);
        } catch (error) {
            toast(error.message);
        }
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
                toast("Updated Successfully");
            }
            else {
                setErrorText("Passwords does not match");
            }
        } catch (error: any) {
            setErrorText("User Name or Email is already taken");
            toast("Please enter valid information");
        }

    }

    return (
        <Grid container>
                <Grid item xs={12} lg={12}>
                <Grid container spacing ={3}>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            name="username"
                            id="standard-password-input"
                            label="User Name"
                            value = {userInfo ? userInfo.username : ''}
                            defaultValue=''
                            type="text"
                            disabled
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
                            disabled
                            value = {userInfo ? userInfo.lastName : ''}
                            defaultValue=''
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
                            value = {userInfo ? userInfo.email : ''}
                            defaultValue=''
                            name="email"
                            type="email"
                            disabled
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
                            disabled
                            value = {userInfo ? userInfo.contactNumber : ''}
                            defaultValue=''
                            name="contactNumber"
                            type="text"
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid>
                    {/* <Grid item xs={12} lg={6}>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            type="password"
                            value = {userInfo ? userInfo.password : ''}
                            defaultValue=''
                            required
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            onChange={handleFormChange}
                        />
                    </Grid> */}
                    <Grid item xs={12} lg={12}>
                        <Button w="100%" type="submit" fullWidth bgColor= "#c77b02" color ="#FFF" onClick={handleSubmit}>Edit</Button>
                    </Grid>
                </Grid>
                </Grid>
        </Grid>);
};

export default Profile;
