import { Box, Center, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../../components/blogPost";
import Loading from "../../components/loading";
import { Grid } from "@material-ui/core";
import { mockData } from "../../components/campaigns/data";
import { API } from "../../../config";
import CampaignCard from "./CampaignCard";

export default function OurCampaigns() {
  const [campaignList, setCampaignList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    getCampaigns();
  }, [])

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
    <Box marginY="50px">
      <Heading marginY="25px" ><Center>Our Campaigns</Center></Heading>
      {loading ? (<Center><Loading /></Center>) : (
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
        </React.Fragment>)}
    </Box>
  );
}
