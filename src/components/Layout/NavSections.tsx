import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { FiBox } from "react-icons/fi";
import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlined from '@material-ui/icons/Search';
import MobileNavigation from "./MobileNavigation";
import { Button, ButtonBase, Grid, IconButton, Popover } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { setUser } from "../../store/UserSlice";
import UserPopover from "../userPopup";
// import logo from "../../Assets/sports-wire-logo.jpeg";
interface Props { }

const Sections: React.FC<Props> = () => {
    const minMatches = useMediaQuery('(max-width:1000px)');
    const maxMatches = useMediaQuery('(max-width:600px)');
    const user = useSelector((state: RootState) => state.user);
    const router: any = useRouter();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const [enableMobileNav, setEnableMobileNav] = useState(false);
    const [aboutUsAnchorEl, setAboutUsAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [enableSubMenuNav, setEnableSubMenuNav] = useState(false);

    const handleMobileNavOpen = () => {
        setEnableMobileNav(!enableMobileNav);
    }
    const handleMobileNavClose = () => {
        setEnableMobileNav(false);
    }
    useEffect(() => {
        const userInfo = sessionStorage.getItem('user');
        if (userInfo) {
            dispatch(setUser(JSON.parse(userInfo)));
        }
    }, [])

    const handlePopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const openAboutNav = Boolean(aboutUsAnchorEl);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleAboutUsPopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAboutUsAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const aboutUs = (<div>
        <Popover
            id={id}
            open={openAboutNav}
            anchorEl={aboutUsAnchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Grid container style={{ width: 200 }}>
                <Grid item xs={12}><Button fullWidth onClick={() => router.push('/about-us')}>About Us</Button></Grid>
                <Grid item xs={12}><Button fullWidth onClick={() => router.push('/about-us')}>Ambassdor</Button></Grid>
                <Grid item xs={12}><Button fullWidth onClick={() => router.push('/about-us')}>Members</Button></Grid>
            </Grid>
        </Popover>
    </div>);


    return (
        <Box verticalAlign="baseline" >


            <SimpleGrid columns={3} paddingBottom="20px" sx={{
                "@media only screen and (max-width: 1000px)": {
                    display: "none",
                },
            }}>
                <Box marginX={1} as="button" onClick={() => router.push('/')} py="3">
                    <Center><Image maxW="400px" position="static" h="60px" src="../../Assets/uk-logo.png" /></Center>
                </Box>

                <Box verticalAlign="baseline">
                    <Center>
                        <SimpleGrid columns={8} paddingY="20px" spacing={5} fontWidth={5} fontSize={20}>
                            <Box _hover={{
                                color: "teal.500",
                            }} as="button" onClick={() => router.push('/')} py="3">
                                <Center><Text  >Home</Text></Center>
                            </Box>
                            <Box _hover={{
                                color: "teal.500",
                            }} as="button" onClick={() => router.push('/#')} py="3">
                                <Center><Text >Women</Text></Center>
                            </Box>
                            <Box _hover={{
                                color: "teal.500",
                            }} as="button" onClick={() => router.push('/#')} py="3">
                                <Center><Text >Men</Text></Center>
                            </Box>
                            <Box _hover={{
                                color: "teal.500",
                            }} as="button" w="100px" onClick={() => router.push('/#')}py="3">
                                <Center><Text >About us</Text></Center>
                                {/* {aboutUs} */}
                            </Box>
                            {/* <Box as="button" _hover={{
                                color: "teal.500",
                            }} onClick={() => router.push('/#')} py="3">
                                <Center><Text >Contacts</Text></Center>
                            </Box> */}
                            <Box as="button" _hover={{
                                color: "teal.500",
                            }} onClick={() => router.push('/#')} py="3">
                                <Center><Text >Gallery</Text></Center>
                            </Box>
                            <Box as="button" _hover={{
                                color: "teal.500",

                            }} onClick={() => router.push('/login')} py="3">
                                <Center><Text >{user.authenticated ? ''
                                    : 'Login'}</Text></Center>
                            </Box>
                            {/* <Box as="button" marginLeft={20}><Center><SearchOutlined /></Center></Box> */}
                            <Box as="button" onClick={() => router.push('/#')}><Button style={{ width: 200, borderRadius: 60, backgroundColor: '#ba2918', color: '#FFF' }}>Shop Now</Button></Box>
                        </SimpleGrid>
                    </Center>
                </Box>
                <Box paddingY="30px" alignContent="center">
                    <Center><Text >{user.authenticated ? (
                        <React.Fragment>
                            <UserPopover handleClick={handlePopOver} handleClose={handleClose} anchorEl={anchorEl} />
                            <Button onClick={handlePopOver} color="inherit"><AccountCircleIcon />{user.username}</Button>
                        </React.Fragment>)
                        : ''}</Text></Center></Box>
            </SimpleGrid>
            {minMatches ? (
                <Grid container>
                    <Grid item xs={11} style = {{padding:"0px 0px 0px 200px"}}><Box as="button" onClick={() => router.push('/')} alignSelf="center" width="auto"><Center><Image alignSelf="center" w="auto" marginX = "40%" h="60px" src="../../Assets/uk-logo.png" /></Center></Box></Grid>
                    <Grid item xs={1}><Box float="right" right={0} onClick={() => handleMobileNavOpen()} marginRight={0} minW="50px" maxW="100px" as="button" alignContent="center" color="#000" ><MenuIcon fontSize="large" /></Box></Grid>
                </Grid>) : null}
            <SimpleGrid alignSelf="center" columns={1} paddingBottom="10px" sx={{
                "@media only screen and (min-width: 1000px)": {
                    display: "none",
                },
            }} marginX={10} onClick={() => router.push('/')} py="1">
                <MobileNavigation isOpen={enableMobileNav} onOpen={handleMobileNavOpen} onClose={handleMobileNavClose} />;
                {/* <Box as="button" alignContent="center" color="#FFFF"><Center alignSelf="center"><SearchOutlined fontSize="large"/></Center></Box> */}
                <Box>
                </Box>
            </SimpleGrid>

        </Box>
    );
};

export default Sections;
