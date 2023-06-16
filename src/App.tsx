import React from 'react';
import {BrowserRouter,} from "react-router-dom";
import AppRouter from "./Routes/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import {Box, ChakraProvider} from "@chakra-ui/react";


function App() {


    return (
        <ChakraProvider>
            <Box bg={'gray.700'}>
                <BrowserRouter>
                    <NavBar/>
                    <AppRouter/>
                </BrowserRouter>
            </Box>
        </ChakraProvider>
    );
}

export default App;
