import React from 'react';
import { Skeleton } from '@mui/material';

type TextSkleton = {
    width: string;
    height?:string;
}

export const CircularSkleton = ({width, height}: TextSkleton) => {
    return <Skeleton variant='circular' width={width} height={height} />;
}


export const TextSkleton = ({width}: TextSkleton) => {
    return <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={width}/>
}
