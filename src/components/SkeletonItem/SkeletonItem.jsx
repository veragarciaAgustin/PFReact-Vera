import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

export const SkeletonItem = () => {

    return (
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2} margin={400}>
            <Skeleton height='2vw' width={'45%'}/>
            <Skeleton height='2vw' width={'45%'}/>
            <Skeleton height='2vw' width={'45%'}/>
        </Stack>
    )
        
}