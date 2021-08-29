import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { toast } from "react-toastify";
import { Grid, Paper, Typography } from "@material-ui/core";

interface Props { }

const SecondCarousel: React.FC<Props> = () => {
  const router: any = useRouter();
  const user = useSelector((state: RootState) => state.user);

  const handleJoin = () => {
    if (!user.authenticated) {
      router.push('/sign-up')
    }
    else {
      toast("You are already a member");
    }
  }
  return (
    <Box style={{ position: 'relative' }} sx={{
      "@media only screen and (max-width: 1000px)": {
          display: "none",
      }}}>
      <img style={{ padding: '5px 20px 5px 20px' }} src='Assets/home-member.jpeg' width="100%" height="300px" />
      <Paper elevation={4} style={{
        position: 'absolute',
        top: '25%',
        left: '50px',
        right: '50px',
        opacity: 0.8
      }}>
        <Grid container>
          <Grid item sm={12} lg={12}>
            <Typography align="center" style={{ fontSize: 24, fontWeight: 900, padding: "30px 10px 00px 10px" }}>
              DO YOU WANT TO
            </Typography>
            <Typography align="center" style={{ color:'red', fontSize: 32, fontWeight: 900, padding: "0px 10px 20px 10px" }}>
          BECOME A MEMBER?
            </Typography>
            <Typography align="center" >We can help poor people by joining together. <br />If you are interested, join us by filling the sign up form. Be the real super hero! Let's change the world!</Typography>
            <Center paddingY={5}><Button style={{ fontSize: '32px', borderColor: 'red', borderWidth: '30px' }} onClick={handleJoin}>JOIN NOW</Button></Center>
          </Grid>
        </Grid>
      </Paper>
    </Box >
  );
};

export default SecondCarousel;
