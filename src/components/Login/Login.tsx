import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup'


export default function Login() {


    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .email('Invalid Email')
            .required('Required')
            .min(5, 'min 5 symbols')
            .max(35, 'max 35 symbols'),

        password: Yup.string()
            .min(2, 'Too Short')
            .max(32, 'Too Long')
            .required('Required'),


    })


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>

                    <Formik initialValues={{
                        email: '',
                        password: '',
                    }}
                            onSubmit={(values, {resetForm}) => {
                                console.log('values: ', values)
                                resetForm()

                            }}
                            validationSchema={validationSchema}
                    >
                        {({
                              handleSubmit,
                              errors,
                              touched
                          }) => (
                            <Form onSubmit={handleSubmit}>
                                <Stack spacing={4}>
                                    <Box h={"100px"}>
                                        <FormControl isInvalid={!!errors.email && touched.email}>
                                            <FormLabel htmlFor="email">Email address</FormLabel>
                                            <Field
                                                as={Input}
                                                id="email"
                                                name="email"
                                                type="email"
                                                variant="filled"
                                            />
                                            {touched.email && errors.email &&
                                                <div color='red'>{errors.email}</div>
                                            }
                                        </FormControl>
                                    </Box>

                                    <Box h={"100px"}>
                                        <FormControl>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Field
                                                as={Input}
                                                id="password"
                                                name="password"
                                                type="password"
                                                variant="filled"
                                            />
                                            {touched.password && errors.password &&
                                                <div color='red'>{errors.password}</div>
                                            }

                                        </FormControl>
                                    </Box>

                                    <Button
                                        type={'submit'}
                                        colorScheme={'orange'}
                                        width={'full'}
                                        _hover={{
                                            background: 'orange',
                                            color: 'orange.50',
                                        }}
                                    >
                                        Login
                                    </Button>


                                </Stack>
                            </Form>

                        )}

                    </Formik>


                </Box>
            </Stack>
        </Flex>
    );
}


// import React from 'react'
// import {Form, Formik} from "formik";
// import * as Yup from 'yup'
// import {Box, Button, Checkbox, Flex, FormControl, Input, VStack} from "@chakra-ui/react";
// import {NavLink, useNavigate} from "react-router-dom";
//
//
// const Login = () => {
//
//
//     const navigate = useNavigate();
//
//
//     const validationSchema = Yup.object().shape({
//         email: Yup.string()
//             .email('Invalid Email')
//             .required('Required')
//             .min(5, 'min 5 symbols')
//             .max(35, 'max 35 symbols'),
//         password: Yup.string()
//             .required('Required')
//             .min(2, 'Too Short')
//             .max(32, 'Too Long')
//     })
//
//     return (
//         <div>
//             <Flex bg="orange.100" align='center' justify='center' h='90vh'>
//                 <Box bg={'white'} p={25} rounded={'md'}>
//
//                     <Formik initialValues={{
//                         email: '',
//                         password: '',
//                         rememberMe: false
//                     }}
//                             onSubmit={ async (values, {resetForm}) => {
//                                 console.log('values: ', values)
//
//                             }}
//                             validationSchema={validationSchema}
//                     >
//                         {({
//                               values,
//                               handleChange,
//                               dirty,
//                               handleSubmit,
//                               errors,
//                               touched,
//                               handleBlur,
//
//                           }) => (
//                             <Form onSubmit={handleSubmit}>
//                                 <VStack spacing={10}>
//                                     <FormControl pb={15} >
//                                         <label htmlFor={'email'}>Email</label>
//                                         <Input
//                                             type={'email'}
//                                             as={Input}
//                                             id={'email'}
//                                             name={'email'}
//                                             onChange={handleChange}
//                                             value={values.email}
//                                             onBlur={handleBlur}
//                                             placeholder={'Enter Email'}
//                                         />
//                                     </FormControl>
//                                     <FormControl pb={15}>
//                                         <label htmlFor={'password'}>Password</label>
//                                         <Input
//                                             type={'password'}
//                                             as={Input}
//                                             id={'password'}
//                                             name={'password'}
//                                             onChange={handleChange}
//                                             value={values.password}
//                                             onBlur={handleBlur}
//                                             placeholder={'Enter Password'}
//                                         />
//                                     </FormControl>
//                                     <Checkbox
//                                         type={'checkbox'}
//                                         id={'rememberMe'}
//                                         name={'rememberMe'}
//                                         onChange={handleChange}
//                                         isChecked={values.rememberMe}
//                                     >
//                                         Remember Me
//                                     </Checkbox>
//
//                                     <Button
//                                         type={'submit'}
//                                         colorScheme={'orange'}
//                                         width={'full'}
//                                         _hover={{
//                                             background: 'orange',
//                                             color: 'orange.50',
//                                         }}
//                                     >
//                                         Login
//                                     </Button>
//                                     <div>
//                                         Dont have account?
//                                         <br/>
//                                         <NavLink to={'/registration'} color='orange'> Registration</NavLink>
//                                     </div>
//                                 </VStack>
//                             </Form>
//                         )
//                         }
//
//                     </Formik>
//
//                 </Box>
//             </Flex>
//         </div>
//     )
// }
//
// export default Login
