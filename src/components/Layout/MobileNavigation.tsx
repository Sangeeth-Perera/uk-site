import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Grid,
  Center,
} from "@chakra-ui/react"
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function MobileNavigation(props: any) {
  const router: any = useRouter();
  const user = useSelector((state: RootState) => state.user);

  const { isOpen, onOpen, onClose } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="#FFF" bgColor="#000">
          <ModalHeader alignSelf="center">
            <Box _hover={{
              background: "white",
              color: "teal.500",
            }} as="button" onClick={() => { onClose(); router.push('/') }} py="3">
              <Center>Home</Center>
            </Box></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid container>
              <Grid item sm={12}>
                <Box _hover={{
                  background: "white",
                  color: "teal.500",
                }} as="button" onClick={() => { onClose(); router.push('/campaigns') }} py="3">
                  <Center><Text  >Campaigns</Text></Center>
                </Box>
              </Grid>
              <Grid item sm={12}>
                <Box _hover={{
                  background: "white",
                  color: "teal.500",
                }} as="button" onClick={() => { onClose(); router.push('/events') }} py="3">
                  <Center><Text >Events</Text></Center>
                </Box>
              </Grid>
              <Grid item sm={12}>
                <Box _hover={{
                  background: "white",
                  color: "teal.500",
                }} as="button" onClick={() => { onClose(); router.push('/about-us') }} py="3">
                  <Center><Text >About us</Text></Center>
                </Box>
              </Grid>
              <Grid item sm={12}>
                <Box _hover={{
                  background: "white",
                  color: "teal.500",
                }} as="button" onClick={() => { onClose(); router.push('/contact-us') }} py="3">
                  <Center><Text >Contact us</Text></Center>
                </Box>
              </Grid>
              <Grid item sm={12}>
                <Box as="button" _hover={{
                  background: "white",
                  color: "teal.500",
                }} onClick={() => { onClose(); router.push('/gallery') }} py="3">
                  <Center><Text >Gallery</Text></Center>
                </Box>
              </Grid>
              <Grid item sm={12}>
                {user.authenticated ? (
                  <Box as="button" _hover={{
                    background: "white",
                    color: "teal.500",
                  }} onClick={() => { onClose(); router.push('/') }} py="3">
                    <Center><Text >{user.username}</Text></Center>
                  </Box>

                ) : (
                  <Box as="button" _hover={{
                    background: "white",
                    color: "teal.500",
                  }} onClick={() => { onClose(); router.push('/login') }} py="3">
                    <Center><Text >Login</Text></Center>
                  </Box>)}
              </Grid>
            </Grid>
          </ModalBody>

          {/* 
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default MobileNavigation;