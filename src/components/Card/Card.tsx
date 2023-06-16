import {Avatar, Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {useState} from "react";


interface ICards {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

export default function Card ({title, albumId, url, thumbnailUrl, id}: ICards) {

    const [titleSlice, setTitleSlice] = useState<number>(25)
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)


    return (
        <Center py={6}>
            <Box
                maxW={'270px'}
                h={'400px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={url}
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={thumbnailUrl}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading textAlign={"center"} justifyContent={'center'} fontSize={'2xl'} fontWeight={500}
                                 fontFamily={'body'}>

                            {capitalizedTitle.length + 1 > titleSlice
                                ? capitalizedTitle.slice(0, titleSlice) + `...`
                                : capitalizedTitle
                            }


                        </Heading>
                        <Text color={'gray.500'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Album ID: {albumId}
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                ID: {id}
                            </Text>
                        </Stack>
                    </Stack>

                </Box>
            </Box>
        </Center>
    );
}