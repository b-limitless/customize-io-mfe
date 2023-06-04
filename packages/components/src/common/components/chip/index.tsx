import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { style } from "../styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface MultipleSelectChipInterface {
    value: string[];
    id: string;
    label: string;
    handleChange: any;
    options: string[];
    [x:string]:any;
}

const MultipleSelectChip: React.FC<MultipleSelectChipInterface> = ({options, value, id, label, handleChange }: MultipleSelectChipInterface) => {
    const theme = useTheme();


    return (
        <div>
            <FormControl sx={{ ...style, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    labelId={id}
                    id={id}
                    multiple
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput id={id} label={label} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} className="hellworld">
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {options.map((name:any) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, value, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultipleSelectChip;