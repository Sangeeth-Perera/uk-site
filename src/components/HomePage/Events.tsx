import { Box, Center, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../../components/blogPost";
import Loading from "../../components/loading";
import { Grid, Typography } from "@material-ui/core";
import { mockData } from "../../components/campaigns/data";
import { API } from "../../../config";
import CampaignCard from "./CampaignCard";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';

export default function Events() {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        getEvents();
    }, [])

    const getEvents = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API}/events`)
            setEventList(response.data);
            setLoading(false);
        } catch (error) {
            setErrorText("Oops..We are sorry. Something went wrong... ");
            setLoading(false);
        }
    }
    function formatDate(date: any, use: any) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        if (use == 'date') {
            return day;
        }
        else {
            return monthNames[d.getMonth()];
        }

    }

    if (eventList.length) {
        return (
            <Box marginY="50px">
                <Heading marginY="25px" ><Center>Upcoming Events</Center></Heading>
                <Center>
                <Grid container alignItems='center'>
                    <Grid item sm={6} md ={6} lg={6}>

                        <img style={{ padding: '5px 20px 5px 20px' }} src={API + eventList[0].eventCover[0].url} width="500px" height="300px" />
                    </Grid>
                    <Grid item sm={6} md ={6} lg={6}>
                        {eventList.map((event: any) => (
                            <Grid container style={{ paddingBottom: '10px' }} alignItems='center'>
                                <Grid item sm ={3} md = {3} lg={3}>
                                    <Typography style={{ color: 'red', fontSize: '24px' }}>{formatDate(event.date, 'date')}</Typography>
                                    <Typography style={{ color: 'red', fontSize: '12px' }}>{formatDate(event.date, 'month').substring(0,3)}</Typography>
                                </Grid>
                                <Grid item lg={9} sm ={9} md = {9}>
                                    <Typography style={{ fontSize: '24px' }} ><b>{event.eventName}</b></Typography>
                                    <div style={{ display: 'flex' }}>
                                        <Typography style={{ fontSize: '12px' }}><ScheduleIcon fontSize='small' />{event.startTime} - {event.endTime}</Typography>
                                        <Typography style={{ fontSize: '12px' }}><LocationOnIcon fontSize='small' />{event.venue}</Typography>
                                    </div>
                                </Grid>
                            </Grid>

                        ))}
                    </Grid>
                </Grid>
                {/* {loading ? (<Center><Loading /></Center>) : (
        <React.Fragment>
          {!errorText ? (
            <Grid container spacing={1}>
                {campaignList.slice(0.3).map(((campaign: any) => (
                <Grid item xs={12} lg={4} md={6}>
                  <Center>
                    <CampaignCard blog={campaign} />
                  </Center>
                </Grid>
              )))}
            </Grid>)
            :
            (<Center fontWeight={3} fontSize={32}>{errorText}</Center>)}
        </React.Fragment>)} */}
        </Center>
            </Box >
        );
    }
    else
        return <>
            <Box marginY="50px">
                <Heading marginY="25px" ><Center>Upcoming Events</Center></Heading>
                <Center><Loading /></Center>
            </Box></>;
}
