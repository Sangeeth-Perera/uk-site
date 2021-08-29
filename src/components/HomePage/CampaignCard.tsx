import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Button, Grid, Paper, withStyles } from '@material-ui/core';
import router, { useRouter } from 'next/router';
import { Center } from '@chakra-ui/react';
import { API } from '../../../config';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toast } from 'react-toastify';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
      height: "100%"
    },
    content: {
      width: "300px",
      height: "100%"
    },
    media: {
      height: '200px',
      width:'100%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function CampaignCard(props: any) {

  const classes = useStyles();
  const { blog } = props;
  const [expanded, setExpanded] = React.useState(false);
  const router: any = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const user = useSelector((state: RootState) => state.user);

  const handleView = (item: any) => {

  }
  const handleRegister = (item: any) => {
    if (!user.authenticated) {
      toast("You need to log in first to register");
      router.push('/login');
    }
    else {
      handleMemberRegister(item);
    }
  }

  const handleMemberRegister = async (item: any) => {
    try {
      const response = await axios.get(`${API}/users/${user.id}`);
      const campaignIndex = response.data?.campaigns.find((campaign: any) => campaign.id === item.id);
      if (campaignIndex) {
        toast("You are already registered");
      }
      else {
        let userInfo = response.data;
        userInfo.campaigns.push(item.id);
        addCampaignMember(item, userInfo);
      }
    } catch (error) {
      toast(error.message);
    }
  }
  const addCampaignMember = async (item: any, userInfo: any) => {
    try {
      const response = await axios.put(`${API}/users/${user.id}`, userInfo);
      toast("You have been added to the Campaign");
    } catch (error) {
      toast(error.message);
    }
  }


  return (
    <Paper elevation ={4} >
    <Card className={classes.root}>
      <img
        className={classes.media}
        src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title="Paella dish"
      />
      <CardContent className={classes.content}>
        <Typography align="center" variant="h5" component="p">
          {blog.campaignName}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {blog.description && blog.description.substring(0, 60)}
        </Typography> */}
        <Grid container>
          <Grid item lg={12} sm={12}>
            <Typography style={{ fontSize: "20px", padding: "10px 5px 5px 5px" }} variant="body2" align="center" component="p">
            $. {blog.targetAmount}
            </Typography>
            <BorderLinearProgress variant="determinate" value={parseFloat(String((blog.collectedAmount / blog.targetAmount)*100))} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container spacing={3}>
          <Grid item lg={12}style={{ backgroundColor: '#fc030f', color: "#FFF" }}>
            <Button fullWidth style={{ backgroundColor: '#fc030f', color: "#FFF" }} onClick={() => router.push('/#?id='+blog.id)}>Add to Cart</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    </Paper>
  );
}