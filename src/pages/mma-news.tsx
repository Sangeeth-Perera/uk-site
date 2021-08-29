import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Campaign from "../components/blogPost";
import Loading from "../components/loading";

export default function Ufc() {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');


  useEffect(() => {
    getBlogs();
  }, [])

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://aqueous-inlet-39043.herokuapp.com/blogs?category=-1')
      setBlogList(response.data);4
      setLoading(false);
    } catch (error) {
      setErrorText("Oops..We are sorry. Something went wrong... ");
      setLoading(false);
    }
  }
  return (
    <Box marginY="50px">
      <Heading marginY="25px"><Center>MMA News</Center></Heading>
      {loading ? (<Center><Loading/></Center>) : (
        <React.Fragment>
          {!errorText ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {blogList.map((blog: any) => (
              <GridItem>
                <Campaign blog={blog} />
              </GridItem>
            ))}
          </Grid>)
          :
          (<Center fontWeight={3} fontSize={32}>{errorText}</Center>)}
        </React.Fragment>)}
    </Box>
  );
}
