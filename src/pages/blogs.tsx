import { Box, Center, GridItem, Heading } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Campaign from "../components/blogPost";
import Loading from "../components/loading";
import { Grid } from "@material-ui/core";
import { CalendarTodayOutlined } from "@material-ui/icons";

export default function Blogs() {


  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    getBlogs();
  }, [])

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://aqueous-inlet-39043.herokuapp.com/blogs')
      setBlogList(response.data);
      setLoading(false);
    } catch (error) {
      setErrorText("Oops..We are sorry. Something went wrong... ");
      setLoading(false);
    }
  }
  return (
    <Box marginY="50px">
      <Heading marginY="25px"><Center>Blogs</Center></Heading>
      {loading ? (<Center><Loading /></Center>) : (
        <React.Fragment >
          {!errorText ? (
            <Grid container spacing ={1}>
              {blogList.map((blog: any) => (
                <Grid item xs={12} lg={4} md={6}>
                  <Center>
                    <Campaign blog={blog} />
                  </Center>
                </Grid>
              ))}
            </Grid>
          )
            :
            (<Center fontWeight={3} fontSize={32}>{errorText}</Center>)}
        </React.Fragment>)}
    </Box>
  );
}
