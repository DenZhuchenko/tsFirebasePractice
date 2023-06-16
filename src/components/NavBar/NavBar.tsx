import React, {ReactNode} from 'react';
import {Box, Button, Flex, Stack, useColorMode, useColorModeValue,} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {NavLink} from "react-router-dom";

const NavigationLink = ({children}: { children: ReactNode }) => (
    <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}>
        <NavLink to={'/'}>
            {children}
        </NavLink>
    </Box>
)


export default function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode();



    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <NavigationLink>
                            Bob & Bob
                        </NavigationLink>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                            </Button>

                            <NavLink to={'/login'}>
                                <Button>
                                    Login
                                </Button>

                            </NavLink>


                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}