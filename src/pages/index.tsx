import { Box } from "@chakra-ui/react";
import Articles from "../components/HomePage/Articles";
import BestSellers from "../components/HomePage/BestSellers";
import CoreValues from "../components/HomePage/CoreValues";
import FirstCarousel from "../components/HomePage/FirstCarousel";
import Hero from "../components/HomePage/Hero";
import Newsletter from "../components/HomePage/Newsletter";
import SecondCarousel from "../components/HomePage/SecondCarousel";
import Testimonials from "../components/HomePage/Testimonials";
import Head from 'next/head'
import React from "react";
import Sections from "../components/Layout/NavSections";
import Campaigns from "../components/campaigns";
import AboutUs from "../components/HomePage/AboutUs";
import OurCampaigns from "../components/HomePage/Campaigns";
import Partners from "../components/HomePage/Partners";
import Events from "../components/HomePage/Events";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="LoTQgawy0MW6IhNfgQHsJWOmVfaKykMdfUOOC2LD970" />
        <title>CCC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta property="og:image" content="url(Assets/coverLatest.jpg)"/> */}
      </Head>
      <Box>
        {/* <Hero /> */}
        <Articles />
        <OurCampaigns />
        
        <AboutUs />
        <Events/>
        <Partners/>
        {/* <CoreValues/> */}
        {/* <Newsletter /> */}
        <SecondCarousel />
      </Box>
    </div>
  );
}
