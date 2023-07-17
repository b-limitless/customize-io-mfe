import React from 'react';
import { FormHelperText } from '@mui/material';

type Props = {
    text: string;
}

export default function HelpText({ text }: Props) {
    return (
        <FormHelperText sx={{ color: '#d32f2f' }}>{text}</FormHelperText>
    )
}