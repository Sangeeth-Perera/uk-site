import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import Copyrights from "../components/Layout/Copyrights";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Sections from "../components/Layout/NavSections";
import Topbar from "../components/Layout/Topbar";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from "../store";
import axios from "../services/interceptor";
const colors = {
  brand: {
    text: "#7e736f",
    heading: "#2d1b15",
  },

  orange: {
    100: "#fdddd4",
    200: "#fabba9",
    300: "#f89a7d",
    400: "#f57852",
    500: "#f35627",
    600: "#c2451f",
    700: "#923417",
    800: "#612210",
    900: "#311108",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {

  const axiosVar = axios;
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Sections />
        <Container maxW="100%">
          <Component {...pageProps} />
          <ToastContainer />
        </Container>
        <Footer />
        <Copyrights/>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
