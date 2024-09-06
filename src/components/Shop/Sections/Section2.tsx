import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CustomButton from '../../Button/Button';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Filtersvg from '../../../assets/Filtersvg/Filtersvg';
import Section3 from './Section3';



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
const Section2 = () => {
    const [filter, setfilter] = useState(false)
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
    const names = [
        'Oliver Hansen',
        'Van Henry',
    ]

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    function getStyles(name: string, personName: readonly string[], theme: Theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const Showfilter = () => {
        setfilter(!filter)
    }
    return (
        <Box sx={{ width: '100%', height: "auto", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "10px" }}>
            <Box sx={{ width: '95%', display: 'flex', gap: '16px', justifyContent: { xs: 'center', md: 'end' }, alignItems: { xs: 'center', md: 'baseline' }, flexDirection: { xs: 'column', md: 'row' } }}>
                <TextField
                    variant="outlined"
                    placeholder="Search keywords"
                    sx={{
                        width: { xs: '80%', md: '569px', marginRight: { xs: 'none', md: '1rem' } },
                        border: '0.6px solid #E0E0E0',
                        height: { xs: '48px', md: '48px' },
                        borderRadius: "6px",
                        '& .MuiOutlinedInput-root': {
                            height: { xs: '48px', md: '48px' },
                            '& fieldset': {
                                borderColor: '#E0E0E0', // Default border color
                            },
                            '&:hover fieldset': {
                                border: '1px solid black', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                border: '1px solid black', // Border color when focused
                            },
                            '& input::placeholder': {
                                color: '#E0E0E0',
                                opacity: 1,
                                border: "none",
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>

                        ), endAdornment: (
                            <InputAdornment position="start">
                                <Box sx={{ display: { xs: 'block', md: 'none' } }}>

                                    <CustomButton xh="36px" fontsize='20px' title='Search' bgColor='#D71C24' width='80px' height='36px' isBgColor={true} border='none' color='white' onClick={() => { }} />
                                </Box>
                            </InputAdornment>
                        )
                    }}
                />
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <CustomButton xh='auto' fontsize='20px' title='Search' bgColor='#D71C24' width='120px' height='48px' isBgColor={true} border='none' color='white' onClick={() => { }} />
                </Box>
                <Box sx={{ width: { xs: '80%', md: '26%' }, display: "flex", justifyContent: { xs: 'space-between', md: 'center' } }}>

                    <FormControl sx={{ marginLeft: { xs: '0px', md: '5rem' }, width: { xs: '73%', md: '318px' }, height: '48px', '.MuiOutlinedInput-root': { height: '48px', color: '#2F2F2F', fontWeight: '500', fontFamily: 'Lato', fontStyle: '-moz-initial' } }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <Typography sx={{ color: '#2F2F2F', fontWeight: '500', fontFamily: 'Lato', }}>Select Options</Typography>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Select option</em>
                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ display: { xs: 'block', md: 'none', cursor: 'pointer' } }} onClick={() => Showfilter()} className="svg-icon"><Filtersvg /></Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' }, width: '76%' }}>

                {filter && <Section3 />}
            </Box>
        </Box >
    )
}

export default Section2
