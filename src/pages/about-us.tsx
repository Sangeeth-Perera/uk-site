import { Grid, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../components/blogPost";
import CardContent from "@material-ui/core/CardContent";
import {Card} from "@material-ui/core";
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import customStyles from '../components/Aboutus/about-style.module.css';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from 'react-swipeable-views';
import SLCommitte from '../components/Comitties/SriLankaCommitte';
import AUCommitte from '../components/Comitties/AUCommitte';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      cardCorners: {
        borderRadius: '0 !important' as any,
        border: 'none'
      }
    }),
);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
        )}
      </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Aboutus(props: TabPanelProps) {

  const [blogList, setBlogList] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <div style={{ display: 'flex' }}>
              <img src="Assets/cover-footer-small1.jpg" alt="bikeathon" width="33%" height="345" />
              <img src="Assets/cover-small.jpg" alt="bikeathon" width="33%" height="345" />
              <img src="Assets/sanga-pic.jpg" alt="bikeathon" width="34%" height="345" />
            </div>
          </Grid>
        </Grid>


    <Grid container spacing={3} style={{'marginBottom': '20px !important;'}}>
      <Grid item xs={12} sm={4}>
        <Card className={customStyles.cardCorners}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Text title goes here
            </Typography>
            <Typography variant="h5" component="h2">
              This is a simple text
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={customStyles.cardCorners}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Text title goes here
            </Typography>
            <Typography variant="h5" component="h2">
              This is a simple text
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={customStyles.cardCorners}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Text title goes here
            </Typography>
            <Typography variant="h5" component="h2">
              This is a simple text
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12} sm={12} className={classes.cardCorners}>
        <Card className={customStyles.cardCorners}>
          <CardContent style={{'padding': '0 !important'}}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={7}>
                <Card className={classes.cardCorners} style={{'border': 'none;', 'boxShadow': 'none;', 'padding':'20px;'}}>
                  <CardContent>
                    <Typography variant="h2" gutterBottom className={customStyles.tabHeading}>
                      OUR VALUES
                    </Typography>
                    <AppBar position="static" className={customStyles.tabBar} style={{'marginBottom': '20px'}}>
                      <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="primary"
                          variant="fullWidth"
                          aria-label="full width tabs example"
                      >
                        <Tab label="Conscience" {...a11yProps(0)} className={customStyles.tabHeaders}/>
                        <Tab label="Communication" {...a11yProps(1)} className={customStyles.tabHeaders}/>
                        <Tab label="Collaboration" {...a11yProps(2)} className={customStyles.tabHeaders}/>
                        <Tab label="Conscience" {...a11yProps(3)} className={customStyles.tabHeaders}/>
                      </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                      <TabPanel value={value} index={0} dir={theme.direction}>
                        Avec plus de 100 nationalités présentes sur son territoire, Cureghem est unth quartier exceptionnellement multiculturel. En sillonnant ses rues, on parcourt monde. IMPACT a construit en collaboration avec la commune d’Anderlechtl, musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vol monde. IMPACT a construit en collaboration avec la commune d’Anderlechttl musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vo
                      </TabPanel>
                      <TabPanel value={value} index={1} dir={theme.direction}>
                        Avec plus de 100 nationalités présentes sur son territoire, Cureghem est unth quartier exceptionnellement multiculturel. En sillonnant ses rues, on parcourt monde. IMPACT a construit en collaboration avec la commune d’Anderlechtl, musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vol monde. IMPACT a construit en collaboration avec la commune d’Anderlechttl musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vo
                      </TabPanel>
                      <TabPanel value={value} index={2} dir={theme.direction}>
                        Avec plus de 100 nationalités présentes sur son territoire, Cureghem est unth quartier exceptionnellement multiculturel. En sillonnant ses rues, on parcourt monde. IMPACT a construit en collaboration avec la commune d’Anderlechtl, musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vol monde. IMPACT a construit en collaboration avec la commune d’Anderlechttl musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vo
                      </TabPanel>
                      <TabPanel value={value} index={3} dir={theme.direction}>
                        Avec plus de 100 nationalités présentes sur son territoire, Cureghem est unth quartier exceptionnellement multiculturel. En sillonnant ses rues, on parcourt monde. IMPACT a construit en collaboration avec la commune d’Anderlechtl, musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vol monde. IMPACT a construit en collaboration avec la commune d’Anderlechttl musée au travers duquel vous pourrez découvrir, le portrait de cinq Bruxelloil venus d’ailleurs. Grace à ses dispositifs vidéo ludiques vous pourrez testez vo
                      </TabPanel>
                    </SwipeableViews>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={5}>
                <img src="https://dummyimage.com/600x400/000/fff" alt="" style={{'width':'100%'}}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12} sm={12} className={classes.cardCorners}>
        <Card className={classes.cardCorners} style={{'border': 'none;', 'boxShadow': 'none;', 'padding':'20px;', 'backgroundColor': '#E80E0E'}}>
          <CardContent>
            <Typography variant="h2" gutterBottom style={{fontSize: '35px;', textAlign: 'center', color: 'white'}}>
              OUR GUIDING PRINCIPLES
            </Typography>
            <Typography variant="h5" gutterBottom style={{'fontSize': '18px;', 'textAlign': 'center', 'color': 'white'}}>
              Courage to begin the journey. To go forward and challenge one self and others. Compassion to live the journey. To understand, value and act for the wellbeing of all. Commitment to complete the journey. To persevere and achieve our goals.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12} sm={12} className={classes.cardCorners}>
        <Card className={customStyles.cardCorners}>
          <CardContent style={{'padding': '0 !important'}}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={7}>
                <Card className={classes.cardCorners} style={{'border': 'none;', 'boxShadow': 'none;', 'padding':'20px;'}}>
                  <CardContent>
                    <Typography variant="h2" gutterBottom className={customStyles.tabHeading}>
                      OUR ORIGINS
                    </Typography>
                    <Typography variant="h5" gutterBottom style={{'fontSize': '18px;'}}>
                      1333 is an initiative by CCC Foundation in partnership withth Lifeline in Australia. Lifeline is the largest crisis support service in Australia with over 50 centers across the country. 1333 ann telephone crisis supporters are trained under the guidance th of Lifeline and 1333 is a part of the Lifeline International andt network of telephone crisis supporters services around the th world. <br/><br/>
                      CCCFoundation, founded in 2003 is a registered Not for thei Profit Charitable organization based in Sri Lanka and thesa th Australia to provide services in the areas of mental thra the a well-being and cancer care. Gazetted (No. 1523/31 – 20071 November 16)and passed through the parliament of thr thee Sri Lanka.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={5}>
                <img src="https://dummyimage.com/600x400/000/fff" alt="" style={{'width':'100%'}}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12} sm={12} className={classes.cardCorners}>
        <Card className={customStyles.cardCorners}>
          <CardContent style={{'padding': '0 !important'}}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Card className={classes.cardCorners} style={{'border': 'none;', 'boxShadow': 'none;', 'padding':'20px;'}}>
                  <CardContent>
                    <Typography variant="h2" gutterBottom style={{'fontSize':'30px;', fontWeight : 450}}>
                      CCC FOUNDATION COMMITTEE
                    </Typography>
                    <Typography variant="h5" gutterBottom style={{'fontSize': '20px', 'color': '#FF1F1F'}}>
                      Sri Lanka Board
                    </Typography>
                    <SLCommitte/>
                    <Typography variant="h5" gutterBottom style={{'fontSize': '20px', 'color': '#FF1F1F'}}>
                      Australia Board
                    </Typography>
                    <AUCommitte/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>


  </React.Fragment>

  );
}