import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { colors } from '../../config/colors';




export default function Checbox(props: any) {
    return (
        <Checkbox
            {...props}
            sx={{
                padding: "0px",
                color: colors.primary,
                '&.Mui-checked': {
                    color: colors.yellow,
                },
            }}
        />

    );
}