import { Box, Center, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../../components/blogPost";
import Loading from "../../components/loading";
import { Grid } from "@material-ui/core";
import { mockData } from "../../components/campaigns/data";
import { API } from "../../../config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function OurCampaigns() {
    const [campaignList, setCampaignList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        getCampaigns();
    }, [])

    const partnerList = [{ title: 'ACL', url: '#', image: 'Assets/partner-acl-logo.png' },
    { title: 'ACL', url: '#', image: 'Assets/partner-acl-logo.png' },
    { title: 'Classic Travel', url: '#', image: 'Assets/partner-classic-travel.png' },
    { title: 'ACL', url: '#', image: 'Assets/partner-light-red-border-swirl.svg' },
    { title: 'ACL', url: '#', image: 'Assets/partner-rotary-logo.svg' },
    { title: 'ACL', url: '#', image: 'Assets/partner-triad-logo.png' },
    { title: 'ACL', url: '#', image: 'Assets/partner-wuerth-logo.svg' }]

    const getCampaigns = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API}/campaigns`)
            setCampaignList(response.data);
            setLoading(false);
        } catch (error) {
            setErrorText("Oops..We are sorry. Something went wrong... ");
            setLoading(false);
        }
    }
    return (
        <Box marginY="100px">
            <Heading marginY="25px" ><Center>OUR MOST TRUSTED SUPPORTIVE PARTNERS</Center></Heading>
            {loading ? (<Center><Loading /></Center>) : (
                <React.Fragment>
                    {!errorText ? (
                        <Carousel responsive={responsive}>
                        <img style = {{padding:'5px 20px 5px 20px'}} src='Assets/partner-acl-logo.png' width="500px" height="300px" />

                        <img  style = {{padding:'5px 20px 5px 20px'}}  src='Assets/partner-texa-logo.png' width="500px" height="300px" />
                        <img  style = {{padding:'5px 20px 5px 20px'}} src='Assets/partner-classic-travel.png' width="500px" height="300px" />
                        <img style = {{padding:'5px 20px 5px 20px'}} src='Assets/partner-rotary-logo.svg' width="500px" height="300px" />
                        <img  style = {{padding:'5px 20px 5px 20px'}} src='Assets/partner-triad-logo.png' width="500px" height="300px" />
                        <img  style = {{padding:'5px 20px 5px 20px'}} src='Assets/partner-wuerth-logo.svg' width="500px" height="300px" />

                        </Carousel>)
                        :
                        (<Center fontWeight={3} fontSize={32}>{errorText}</Center>)}
                </React.Fragment>)}
        </Box>
    );
}
