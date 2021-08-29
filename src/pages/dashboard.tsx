import { Box, Center, GridItem, Heading, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Grid, Paper, Tabs, Tab, Theme, makeStyles, Typography, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useRouter } from "next/router";
import SwipeableViews from 'react-swipeable-views';
import Profile from "../components/profile/Profile";
import MyCampaigns from "../components/myCampaigns";
import MyEvents from "../components/myEvents";

export default function Dashboard() {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const theme = useTheme();

    const user = useSelector((state: RootState) => state.user);
    const router = useRouter();

    useEffect(() => {
        if (!user.authenticated) {
            router.push('/login');
        }
    }, [])

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    // useEffect(() => {
    //   getEvents();
    // }, [])

    // const getEvents = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get('https://aqueous-inlet-39043.herokuapp.com/blogs?category=1')
    //     setEventList(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     setErrorText("Oops..We are sorry. Something went wrong... ");
    //     setLoading(false);
    //   }
    // }
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    if (user.authenticated) {
    return (
        <Box marginY="50px">
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="My Profile" />
                    <Tab label="My Campaigns" />
                    <Tab label="My Events" />
                </Tabs>
            </Paper>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Profile/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <MyCampaigns/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                   <MyEvents/>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );

    }
    else return (<div></div>);
}


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));