import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import icons from '../../utils/icon';

const {
    AddOutlinedIcon,
    BedOutlinedIcon,
    CottageOutlinedIcon,
    ExpandLessOutlinedIcon,
    ExpandMoreOutlinedIcon,
    FavoriteBorderOutlinedIcon,
    FilterListOutlinedIcon,
    HouseOutlinedIcon,
    NotificationsNoneOutlinedIcon,
    OtherHousesOutlinedIcon,
    SearchIcon,
} = icons;
export default function Selects() {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isSelectionProperties, setSelectionProperties] = useState<string[]>([]);
    const handleIsShow = () => {
        setIsShow((prev) => !prev);
    };
    const isChecked = isShow ? (
        <ExpandLessOutlinedIcon sx={{ color: 'black' }} />
    ) : (
        <ExpandMoreOutlinedIcon sx={{ color: 'black' }} />
    );
    //handle Selection
    const handleIsSelectionProperties = (check: string) => {
        if (isSelectionProperties.includes(check)) {
            setSelectionProperties((prev) => prev.filter((selection) => selection !== check));
        } else {
            setSelectionProperties((prev) => [...prev, check]);
        }
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <Button
                    sx={{
                        border: 2,
                        borderColor: '#0F6556',
                        bgcolor: '#E9F5F2',
                        '&:hover': {
                            border: 2,
                        },
                    }}
                    endIcon={<ExpandMoreOutlinedIcon sx={{ color: 'black' }} />}
                >
                    <Typography color={'black'} component={'span'} variant="body1">
                        Up to $180
                    </Typography>
                </Button>
                <Button
                    onClick={handleIsShow}
                    sx={{
                        border: 2,
                        borderColor: '#0F6556',
                        bgcolor: `${isShow ? 'white' : '#E9F5F2'}`,
                        '&:hover': {
                            border: 2,
                        },
                        position: 'relative',
                    }}
                    variant="outlined"
                    endIcon={isChecked}
                >
                    <Typography color={'black'} component={'span'} variant="body1">
                        Property type
                    </Typography>
                </Button>
                {isShow && (
                    <Card
                        sx={{
                            maxWidth: 510,
                            position: 'absolute',
                            zIndex: 10,
                            top: '33%',
                            left: '15.2%',
                        }}
                    >
                        <CardContent>
                            <Typography
                                fontWeight={'bold'}
                                pt={2}
                                pb={5}
                                component={'header'}
                                variant="h6"
                            >
                                Popular property types
                            </Typography>
                            <Stack
                                spacing={2}
                                justifyContent={'space-between'}
                                direction="row"
                                useFlexGap
                                flexWrap="wrap"
                            >
                                <Box
                                    onClick={() => {
                                        handleIsSelectionProperties('House');
                                    }}
                                    sx={{
                                        position: 'relative',
                                        py: '14px',
                                        px: '30px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: 2,
                                        borderColor: isSelectionProperties.includes('House')
                                            ? '#EEDCA7'
                                            : '#C4C4C4',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            p: 3,
                                            backgroundColor: '#F1F1F1',
                                            borderRadius: '14px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <CottageOutlinedIcon />
                                    </IconButton>
                                    <Typography mt={2} textAlign={'center'} fontWeight={'bold'}>
                                        House
                                    </Typography>
                                    {isSelectionProperties.includes('House') && (
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                position: 'absolute',
                                                py: '2px',
                                                px: '4px',
                                                top: 6,
                                                right: 6,
                                                border: 1,
                                                borderRadius: '100%',

                                                backgroundColor: 'black',
                                                // color: 'white',
                                                fontSize: 10,
                                                boxShadow: 4,
                                            }}
                                        >
                                            <AddOutlinedIcon
                                                sx={{ fontSize: '16px', color: 'white' }}
                                            />
                                        </Typography>
                                    )}
                                </Box>
                                <Box
                                    onClick={() => {
                                        handleIsSelectionProperties('Room');
                                    }}
                                    sx={{
                                        position: 'relative',
                                        py: '14px',
                                        px: '30px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: 2,
                                        // borderColor: `${
                                        //     isSelectionProperties ? '#EEDCA7' : '#C4C4C4'
                                        // } `,
                                        borderColor: isSelectionProperties.includes('Room')
                                            ? '#EEDCA7'
                                            : '#C4C4C4',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            p: 3,
                                            backgroundColor: '#F1F1F1',
                                            borderRadius: '14px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <CottageOutlinedIcon />
                                    </IconButton>
                                    <Typography mt={2} textAlign={'center'} fontWeight={'bold'}>
                                        Room
                                    </Typography>
                                    {isSelectionProperties.includes('Room') && (
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                position: 'absolute',
                                                py: '2px',
                                                px: '4px',
                                                top: 6,
                                                right: 6,
                                                border: 1,
                                                borderRadius: '100%',

                                                backgroundColor: 'black',
                                                // color: 'white',
                                                fontSize: 10,
                                                boxShadow: 4,
                                            }}
                                        >
                                            <AddOutlinedIcon
                                                sx={{ fontSize: '16px', color: 'white' }}
                                            />
                                        </Typography>
                                    )}
                                </Box>
                                <Box
                                    onClick={() => {
                                        handleIsSelectionProperties('Apartment');
                                    }}
                                    sx={{
                                        textAlign: 'center',
                                        position: 'relative',
                                        py: '14px',
                                        px: '30px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: 2,
                                        borderColor: isSelectionProperties.includes('Apartment')
                                            ? '#EEDCA7'
                                            : '#C4C4C4',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            p: 3,
                                            backgroundColor: '#F1F1F1',
                                            borderRadius: '14px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <BedOutlinedIcon />
                                    </IconButton>
                                    <Typography mt={2} textAlign={'center'} fontWeight={'bold'}>
                                        Apartment
                                    </Typography>
                                    {isSelectionProperties.includes('Apartment') && (
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                position: 'absolute',
                                                py: '2px',
                                                px: '4px',
                                                top: 6,
                                                right: 6,
                                                border: 1,
                                                borderRadius: '100%',

                                                backgroundColor: 'black',
                                                // color: 'white',
                                                fontSize: 10,
                                                boxShadow: 4,
                                            }}
                                        >
                                            <AddOutlinedIcon
                                                sx={{ fontSize: '16px', color: 'white' }}
                                            />
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ gap: '31px' }} display={'flex'}>
                                    <Box
                                        onClick={() => {
                                            handleIsSelectionProperties('Cottage');
                                        }}
                                        sx={{
                                            position: 'relative',
                                            py: '14px',
                                            px: '30px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            border: 2,
                                            borderColor: isSelectionProperties.includes('Cottage')
                                                ? '#EEDCA7'
                                                : '#C4C4C4',
                                            borderRadius: '12px',
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                p: 3,
                                                backgroundColor: '#F1F1F1',
                                                borderRadius: '14px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CottageOutlinedIcon />
                                        </IconButton>
                                        <Typography mt={2} textAlign={'center'} fontWeight={'bold'}>
                                            Cottage
                                        </Typography>
                                        {isSelectionProperties.includes('Cottage') && (
                                            <Typography
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    position: 'absolute',
                                                    py: '2px',
                                                    px: '4px',
                                                    top: 6,
                                                    right: 6,
                                                    border: 1,
                                                    borderRadius: '100%',

                                                    backgroundColor: 'black',
                                                    // color: 'white',
                                                    fontSize: 10,
                                                    boxShadow: 4,
                                                }}
                                            >
                                                <AddOutlinedIcon
                                                    sx={{ fontSize: '16px', color: 'white' }}
                                                />
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box
                                        onClick={() => {
                                            handleIsSelectionProperties('Hotel');
                                        }}
                                        sx={{
                                            position: 'relative',
                                            py: '14px',
                                            px: '30px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            border: 2,
                                            borderColor: isSelectionProperties.includes('Hotel')
                                                ? '#EEDCA7'
                                                : '#C4C4C4',
                                            borderRadius: '12px',
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                p: 3,
                                                backgroundColor: '#F1F1F1',
                                                borderRadius: '14px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <OtherHousesOutlinedIcon />
                                        </IconButton>
                                        <Typography mt={2} textAlign={'center'} fontWeight={'bold'}>
                                            Hotel
                                        </Typography>
                                        {isSelectionProperties.includes('Hotel') && (
                                            <Typography
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    position: 'absolute',
                                                    py: '2px',
                                                    px: '4px',
                                                    top: 6,
                                                    right: 6,
                                                    border: 1,
                                                    borderRadius: '100%',

                                                    backgroundColor: 'black',
                                                    // color: 'white',
                                                    fontSize: 10,
                                                    boxShadow: 4,
                                                }}
                                            >
                                                <AddOutlinedIcon
                                                    sx={{ fontSize: '16px', color: 'white' }}
                                                />
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </Stack>
                            <Divider sx={{ my: 3 }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    sx={{
                                        color: 'black',
                                        borderRadius: '12px',
                                        border: 2,
                                        p: '10px 26px',
                                        mr: '10px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Clear
                                </Button>
                                <Button
                                    sx={{
                                        p: '12px 48px',
                                        bgcolor: '#0F6556',
                                        borderRadius: '12px',
                                        color: '#FFFFFF',
                                        fontWeight: 'bold',
                                    }}
                                    variant="contained"
                                >
                                    Apply
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                )}
                <Button
                    sx={{
                        border: 2,
                        borderColor: '#0F6556',
                        bgcolor: '#E9F5F2',
                        '&:hover': {
                            border: 2,
                        },
                    }}
                    variant="outlined"
                >
                    <Typography
                        sx={{ color: 'black' }}
                        mr={'10px'}
                        component={'span'}
                        variant="body1"
                    >
                        Amenities
                    </Typography>

                    <Typography
                        sx={{
                            px: '8px',
                            bgcolor: '#0F6556',
                            borderRadius: '8px',
                            color: '#FFFFFF',
                        }}
                        component={'span'}
                    >
                        4
                    </Typography>
                </Button>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button
                    sx={{
                        border: 2,
                        borderColor: '#0F6556',
                        bgcolor: '#E9F5F2',
                        '&:hover': {
                            border: 2,
                        },
                    }}
                    variant="outlined"
                    startIcon={<FilterListOutlinedIcon sx={{ color: 'black' }} />}
                >
                    <Typography color={'black'} mr={'10px'} component={'span'} variant="body1">
                        More filters
                    </Typography>
                    <Typography
                        sx={{
                            px: '8px',
                            bgcolor: '#0F6556',
                            borderRadius: '8px',
                            color: 'white',
                        }}
                        component={'span'}
                    >
                        8
                    </Typography>
                </Button>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Typography sx={{ fontWeight: 'bold' }} component={'span'}>
                    Clear all
                </Typography>
            </Box>
            <Divider sx={{ width: '100%', height: '4px', backgroundColor: '#E0E0E0', my: 3 }} />
        </React.Fragment>
    );
}
