import { Box, Center, CircularProgress, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Button, createStyles, LinearProgress, makeStyles, Theme, Typography, withStyles } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Campaign from "../../components/blogPost";
import Loading from "../../components/loading";
import {
  FacebookShareButton,
  FacebookShareCount,
  HatenaShareCount,
  InstapaperShareButton,
  LinkedinShareButton,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  TwitterShareButton,
  VKShareCount
} from "react-share";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useLocation } from "react-router-dom";
import Head from "next/head";
import { API } from "../../../config";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    alignSelf: "center",
    width: "100%",
    height: '70vh'
  },

}));

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
      width: '600px'
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

export default function BlogDetails(props: any) {

  // const   { id } = useParams();
  const classes = useStyles();
  const router = useRouter()
  const [blogId, setBlogId] = useState('');
  // const id = new URLSearchParams(search).get('id');
  const { query: { pid } } = router;

  const [blogDetails, setBlogDetails] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    // let bid = JSON.stringify(props);
    let regex = new RegExp('([0-9]+)');
    let blogId = regex.exec(location.pathname + location.search)[0];
    getBlogDetails(parseInt(blogId));
  }, [])

  const getBlogDetails = async (bid: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/campaigns/${bid}`)
      setBlogDetails(response.data);
      setLoading(false);
    } catch (error) {
      setErrorText("Oops..We are sorry. Something went wrong... ");
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <Loading />)
  }
  else {
    return (
      <>
        <Head>
          <meta name="google-site-verification" content="LoTQgawy0MW6IhNfgQHsJWOmVfaKykMdfUOOC2LD970" />
          <script data-ad-client="ca-pub-5756388435575265" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <title>{blogDetails ? blogDetails.blogTitle : null}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content={blogDetails ? blogDetails.coverUrl : 'url(Assets/coverLatest.jpg)'} />
        </Head>
        <Box marginY="50px" marginX="60px">
          {blogDetails ? (
            <React.Fragment>
              <Heading marginY="25px"><Center>{blogDetails ? blogDetails.campaignName : null}</Center></Heading>
              <Grid>
                <GridItem paddingY="25px" display='flex'>
                  <Center><BorderLinearProgress variant="determinate" value={parseFloat(String((blogDetails.collectedAmount / blogDetails.targetAmount) * 100))} />
                    <Box as="button" onClick={() => router.push('/donation')}><Button style={{ width: 200, borderRadius: 60, backgroundColor: '#ba2918', color: '#FFF' }}>Donate Now</Button></Box>
                  </Center>
                </GridItem>
                <GridItem paddingY="25px">
                  <Box bgImage={`url(${API}${blogDetails.coverImage?.url})`} className="yours-custom-class" width="100%" height="250px" />
                </GridItem>
                <GridItem><Typography>{blogDetails ? blogDetails.description : null}</Typography></GridItem>

                <GridItem><Typography>{blogDetails.paragraph2}</Typography></GridItem>
                <GridItem paddingY="25px"><Typography>{blogDetails.paragraph2}</Typography></GridItem>
                <GridItem><Typography>{blogDetails.paragraph3}</Typography></GridItem>
                <GridItem align="right" float="right" marginRight={0} alignContent="right">
                  <Text color="blue">Share on your Social Network</Text>
                  <FacebookShareButton url={window.location.href} title='Facebook'>
                    <FacebookIcon fontSize="large" />
                  </FacebookShareButton>
                  <LinkedinShareButton url={window.location.href} title='Linkdin'>
                    <LinkedInIcon fontSize="large" />
                  </LinkedinShareButton>
                  <TwitterShareButton url={window.location.href} title='Twitter'>
                    <TwitterIcon fontSize="large" />
                  </TwitterShareButton>
                  <InstapaperShareButton url={window.location.href} title='Instagram'>
                    <InstagramIcon fontSize="large" />
                  </InstapaperShareButton>
                </GridItem>
              </Grid>
            </React.Fragment>) : (<Heading marginY="25px"><Center>{errorText ? errorText : 'Error'}</Center></Heading>)}
        </Box>
      </>
    );
  }
}
