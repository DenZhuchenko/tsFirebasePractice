import React, {useState} from 'react';
import {Button, HStack, Input} from "@chakra-ui/react";


function PostFilter({updatePhotos}: any) {


    const [searchValue, setSearchValue] = useState<string>('')

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    return (
        <HStack>

            <Input
                w={"300px"}
                value={searchValue}
                onChange={searchHandler}
            />
            <Button
                onClick={() => updatePhotos(searchValue)}
            >
                Search
            </Button>
        </HStack>
    );
}

export default PostFilter;