import { Box, Text } from "@chakra-ui/react";
import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { Grid, Typography } from "@material-ui/core";
interface Props { }

const Copyrights: React.FC<Props> = () => {
  return (
    <Box color="#fff" bgColor="#000" py="3" paddingBottom="20px" alignItems="center"> 
      <Grid container>
        <Grid item lg={6}>
          <Typography align='center'>Copyright © Delmix - All rights reserved.</Typography>
        </Grid>
        <Grid item lg={2}></Grid>

        <Grid item lg={4} style={{ display: 'flex' }}>
          <FacebookIcon />
          <TwitterIcon />
          <GTranslateIcon />
        </Grid>
      </Grid>

    </Box>
  );
};

export default Copyrights;
