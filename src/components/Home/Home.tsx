import React, {FC, useEffect, useState} from 'react';
import {Box, Grid, GridItem} from "@chakra-ui/react";
import {photosInterface, placeHolderAPI} from "../../API/API";
import Card from "../Card/Card";
import PostFilter from "../NavBar/PoseFilter/PostFilter";


const Home: FC = () => {


    const [photos, setPhotos] = useState<photosInterface[] | null>([])
    const [searchParam, setSearchParams] = useState<string>('')
    console.log(`searchParam: `, searchParam)

    useEffect(() => {
        getPhotos()
    }, [])





    async function getPhotos() {
        const response = await placeHolderAPI.photos()
        setPhotos(response)
    }

    const updatePhotos = (e: any) => {
        setSearchParams(e)
    }




    return (
        <Box>
            <PostFilter
                updatePhotos={(e:any) => updatePhotos(e)}
            />

            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {photos?.map(photo =>
                    <GridItem key={photo.id}>
                        <Card
                            albumId={photo.albumId}
                            id={photo.id}
                            thumbnailUrl={photo.thumbnailUrl}
                            title={photo.title}
                            url={photo.url}/>
                    </GridItem>
                )}

            </Grid>
        </Box>

    );
};

export default Home;