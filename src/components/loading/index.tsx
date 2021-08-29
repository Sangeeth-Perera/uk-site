import { Box, Center,Heading } from "@chakra-ui/react";
import { CircularProgress } from "@material-ui/core";
import React from "react";

interface Props { }

const Loading: React.FC<Props> = () => {
    return (
        <Box h="60vh" paddingY="50px">
            <Center>
                <Heading>Loading...</Heading>
                <CircularProgress />
            </Center>
        </Box>);
};

export default Loading;
