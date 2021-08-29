import { Box, Center, Heading } from "@chakra-ui/react";
import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import Campaign from "../blogPost";
import { mockData } from "./data";

interface Props { }

const Campaigns: React.FC<Props> = () => {
    return (
        <Box marginY="50px">
            <Heading marginY="25px"><Center>Our Campaigns</Center></Heading>
            <React.Fragment>
                <Grid container spacing={1}>
                    {mockData.map((campaign: any) => (
                        <Grid item xs={12} lg={4} md={6}>
                            <Campaign blog={campaign} />
                        </Grid>))}
                </Grid>
            </React.Fragment>
        </Box>);
};

export default Campaigns;
