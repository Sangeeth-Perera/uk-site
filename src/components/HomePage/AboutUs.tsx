import { Button, Grid, Link, Paper, Typography } from "@material-ui/core";
import { route } from "next/dist/next-server/server/router";
import React from "react";

interface Props { }

const AboutUs: React.FC<Props> = () => {
  const property = {
    imageUrl: "https://cdn.shopify.com/s/files/1/0052/5870/7062/files/Top-Slider_Winter-Mood_Fuad.jpg?v=1608549056",
    imageAlt: "cover"
  }

  const vision = 'Building bridges of hope” We are committed to connecting people with resources that enable them to discover their inner strength to overcome the difficult situations in their lives.';
  const goal = 'Empower the callers by supporting them to better understand their issues and come up with their own solution to their problems.';
  const whatWeDo = 'The primary objective of 1333 is to support people to cope with crises and get back on their feet and And, we aim to support people to build resilience to enable them to deal with future challenges.';
  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Typography align="center" style={{ fontSize: 32, fontWeight: 900, padding: "40px 10px 40px 10px" }}>WHO ARE WE</Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Typography align="center" style={{ padding: "10px 30px 10px 30px", color: '#fc030f', fontSize: 20, fontWeight: 600 }}>OUR VISION</Typography>
        <Typography align="center" style={{ padding: "10px 50px 10px 50px" }}>{vision.substring(0, 110)}...</Typography>
        <Link href='/about-us'><Typography align="center" style={{ color: '#000', padding: "10px 50px 10px 50px" }}> <b>View More...</b></Typography></Link>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Typography align="center" style={{ padding: "10px 30px 10px 30px", color: '#fc030f', fontSize: 20, fontWeight: 600 }}>WHAT WE DO
        </Typography>
        <Typography align="center" style={{ padding: "10px 50px 10px 50px" }}>{whatWeDo.substring(0, 110)}...</Typography>
        <Link href='/about-us'><Typography align="center" style={{ color: '#000', padding: "10px 50px 10px 50px" }}>  <b>View More...</b></Typography></Link>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Typography align="center" style={{ padding: "10px 30px 10px 30px", color: '#fc030f', fontSize: 20, fontWeight: 600 }}>OUR GOAL</Typography>
        <Typography align="center" style={{ padding: "10px 50px 10px 50px" }}>
          {goal.substring(0, 110)}...</Typography>
        <Link href='/about-us'><Typography align="center" style={{ color: '#000', padding: "10px 50px 10px 50px" }}>  <b>View More...</b></Typography></Link>
      </Grid>
      {/* <Grid item xs={12} lg={12} >
        <img src="Assets/cover-footer.jpg" width="100%" height="400px" />
      </Grid> */}
    </Grid >
  );
};

export default AboutUs;
