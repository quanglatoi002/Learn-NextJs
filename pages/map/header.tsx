import { Avatar, Box, Button, Divider, IconButton, InputBase, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { deepPurple, red } from '@mui/material/colors';
import React from 'react';
import icons from '../../utils/icon';

const { HouseOutlinedIcon, NotificationsNoneOutlinedIcon, SearchIcon } = icons;
export default function Header() {
    return (
        <React.Fragment>
            <Box
                component={'header'}
                sx={{ display: 'flex', justifyContent: 'space-between', mx: 'auto' }}
            >
                <Box display={'flex'}>
                    <IconButton
                        sx={{
                            p: '10px',
                            border: 2,
                            borderColor: '#1AAF96',
                            bgcolor: '#1AAF96',
                            borderRadius: '16px',
                            mr: '30px',
                        }}
                        aria-label="home"
                    >
                        <HouseOutlinedIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <Box sx={{ display: 'flex' }}>
                        <Paper
                            component="form"
                            sx={{
                                p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 500,
                                backgroundColor: '#EFEFEF',
                                borderRadius: '10px',
                                position: 'relative',
                            }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 3 / 5 }}
                                placeholder="Philladelphia, PA, USA"
                                inputProps={{ 'aria-label': 'Philladelphia, PA, USA' }}
                            />

                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <InputBase
                                sx={{ ml: 1, flex: 1 / 5 }}
                                placeholder="Dates"
                                inputProps={{ 'aria-label': 'Dates' }}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <InputBase
                                sx={{ ml: 1, flex: 1 / 5 }}
                                placeholder="Guests"
                                inputProps={{ 'aria-label': 'Guests' }}
                            />
                            <Button
                                sx={{
                                    p: '12px 22px',
                                    bgcolor: '#0F6556',
                                    borderRadius: '14px',
                                    position: 'absolute',
                                    right: '-15%',
                                }}
                                variant="contained"
                            >
                                Search
                            </Button>
                        </Paper>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'black',
                            borderRadius: '12px',
                            border: 2,
                            p: '10px 18px',
                            mr: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Switch to hosting
                    </Typography>
                    <IconButton sx={{ position: 'relative' }} type="button" aria-label="search">
                        <NotificationsNoneOutlinedIcon sx={{ fontSize: '30px' }} />
                        <Typography
                            sx={{
                                position: 'absolute',
                                px: '6px',
                                top: 6,
                                right: 6,
                                border: 1,
                                borderRadius: '100%',
                                borderColor: red[500],
                                bgcolor: red[500],
                                color: 'white',
                                fontSize: 10,
                                boxShadow: 4,
                            }}
                        >
                            1
                        </Typography>
                    </IconButton>
                    <Divider sx={{ mx: 2 }} orientation="vertical" variant="middle" flexItem />
                    <Avatar sx={{ bgcolor: deepPurple[500], borderRadius: '16px' }}>VQ</Avatar>
                </Box>
            </Box>
            <Divider sx={{ my: 3 }} />
        </React.Fragment>
    );
}
