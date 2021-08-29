import { Box, Center, Container, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { setDefaultHeader } from "../../services/interceptor";
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Grid } from "@material-ui/core";
import { Unarchive } from "@material-ui/icons";
interface Props { }

const Footer: React.FC<Props> = () => {

  const router: any = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setDefaultHeader('Authorization', token);
    }
  }, []);
  return (

    <Grid container style={{ backgroundColor:"#000", bottom: 0, marginBottom: 0, color : '#FFF' }}>
      <Grid item xs={12} lg={4}>
        <Image paddingY="20px"  paddingX="40px" maxW="200px" position="static" h="150px" src="../../Assets/ccc-logo.jpg" />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Text paddingY="10px" fontSize="24px" color="#d61904"><b>LOCATION INFO</b></Text>
        <Text><LocationOnIcon /> CCC Foundation Inc. (Sri Lanka)<br />
          C/O Classic Travel (Pvt) Ltd<br />
          379/4, Galle Road ,<br />  Colombo 03</Text>
        <Text><Link href="#"></Link></Text>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Text paddingY="10px" fontSize="24px" color="#d61904"><b>HELP & CONTACT</b></Text>
        <Text><CallIcon /> +94 11 2633237
        </Text>
        <Text><Link href="#"><MailOutlineIcon /> info@1333.lk</Link></Text>
      </Grid>
    </Grid>
  );
};

export default Footer;
