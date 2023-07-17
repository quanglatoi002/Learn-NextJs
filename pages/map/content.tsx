import { Box, Card, CardContent, Rating, Stack, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import * as React from 'react';
import Map from '../../constants/Map';
import icons from '../../utils/icon';
const { FavoriteBorderOutlinedIcon } = icons;

export default function Content() {
    return (
        <React.Fragment>
            <Typography sx={{ my: 5 }} component={'div'} variant="body1">
                Over 1,000 stays in
            </Typography>
            <Stack direction={'row'} sx={{ display: 'flex', height: '100%' }}>
                <Stack spacing={4} direction={'column'} sx={{ display: 'flex' }}>
                    <Card sx={{ width: '700px' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box width={{ xs: '100%', sm: '230px' }} flexShrink={0}>
                                <Image
                                    src={
                                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621630/Learn-NextJs/item2_hxvtz1.png'
                                    }
                                    width={200}
                                    height={140}
                                    layout="responsive"
                                    alt="work thumbnail"
                                />
                            </Box>

                            <Box sx={{ ml: 3, flex: 1 }}>
                                <Stack height={'80%'} direction={'column'}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            direction: 'row',
                                        }}
                                    >
                                        <Typography
                                            sx={{ opacity: 0.3 }}
                                            fontWeight={'400'}
                                            component={'span'}
                                        >
                                            Entire apartment in Center City
                                        </Typography>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>

                                    <Typography variant="h6" component={'span'}>
                                        Sunset Paradise near Center City
                                    </Typography>
                                    <Typography sx={{ opacity: 0.3 }} component={'span'}>
                                        2 guests . 1 bedroom . 2 beds . 1 bath
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'end',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="customized-1"
                                            defaultValue={2.5}
                                            precision={0.5}
                                            max={1}
                                        />
                                        <Typography
                                            sx={{ pl: 1, pr: '2px' }}
                                            fontWeight={'bold'}
                                            component={'span'}
                                        >
                                            4.82
                                        </Typography>
                                        <Typography sx={{ opacity: 0.3 }}>(67)</Typography>
                                    </Box>
                                    <Typography fontWeight={'bold'}>
                                        ¢95
                                        <span
                                            style={{
                                                opacity: 0.3,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            /night
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '700px' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box width={{ xs: '100%', sm: '230px' }} flexShrink={0}>
                                <Image
                                    src={
                                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621630/Learn-NextJs/item2_hxvtz1.png'
                                    }
                                    width={200}
                                    height={140}
                                    layout="responsive"
                                    alt="work thumbnail"
                                />
                            </Box>

                            <Box sx={{ ml: 3, flex: 1 }}>
                                <Stack height={'80%'} direction={'column'}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            direction: 'row',
                                        }}
                                    >
                                        <Typography
                                            sx={{ opacity: 0.3 }}
                                            fontWeight={'400'}
                                            component={'span'}
                                        >
                                            Entire apartment in Center City
                                        </Typography>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>

                                    <Typography variant="h6" component={'span'}>
                                        Sunset Paradise near Center City
                                    </Typography>
                                    <Typography sx={{ opacity: 0.3 }} component={'span'}>
                                        2 guests
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'end',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="customized-1"
                                            defaultValue={2.5}
                                            precision={0.5}
                                            max={1}
                                        />
                                        <Typography
                                            sx={{ pl: 1, pr: '2px' }}
                                            fontWeight={'bold'}
                                            component={'span'}
                                        >
                                            4.82
                                        </Typography>
                                        <Typography sx={{ opacity: 0.3 }}>(67)</Typography>
                                    </Box>
                                    <Typography fontWeight={'bold'}>
                                        ¢95{' '}
                                        <span
                                            style={{
                                                opacity: 0.3,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            /night
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '700px' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box width={{ xs: '100%', sm: '230px' }} flexShrink={0}>
                                <Image
                                    src={
                                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621635/Learn-NextJs/item3_g1kttf.png'
                                    }
                                    width={200}
                                    height={140}
                                    layout="responsive"
                                    alt="work thumbnail"
                                />
                            </Box>

                            <Box sx={{ ml: 3, flex: 1 }}>
                                <Stack height={'80%'} direction={'column'}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            direction: 'row',
                                        }}
                                    >
                                        <Typography
                                            sx={{ opacity: 0.3 }}
                                            fontWeight={'400'}
                                            component={'span'}
                                        >
                                            Entire apartment in Center City
                                        </Typography>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>

                                    <Typography variant="h6" component={'span'}>
                                        Sunset Paradise near Center City
                                    </Typography>
                                    <Typography sx={{ opacity: 0.3 }} component={'span'}>
                                        2 guests
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'end',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="customized-1"
                                            defaultValue={2.5}
                                            precision={0.5}
                                            max={1}
                                        />
                                        <Typography
                                            sx={{ pl: 1, pr: '2px' }}
                                            fontWeight={'bold'}
                                            component={'span'}
                                        >
                                            4.82
                                        </Typography>
                                        <Typography sx={{ opacity: 0.3 }}>(67)</Typography>
                                    </Box>
                                    <Typography fontWeight={'bold'}>
                                        ¢95{' '}
                                        <span
                                            style={{
                                                opacity: 0.3,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            /night
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '700px' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box width={{ xs: '100%', sm: '230px' }} flexShrink={0}>
                                <Image
                                    src={
                                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621635/Learn-NextJs/item3_g1kttf.png'
                                    }
                                    width={200}
                                    height={140}
                                    layout="responsive"
                                    alt="work thumbnail"
                                />
                            </Box>

                            <Box sx={{ ml: 3, flex: 1 }}>
                                <Stack height={'80%'} direction={'column'}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            direction: 'row',
                                        }}
                                    >
                                        <Typography
                                            sx={{ opacity: 0.3 }}
                                            fontWeight={'400'}
                                            component={'span'}
                                        >
                                            Entire apartment in Center City
                                        </Typography>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>

                                    <Typography variant="h6" component={'span'}>
                                        Sunset Paradise near Center City
                                    </Typography>
                                    <Typography sx={{ opacity: 0.3 }} component={'span'}>
                                        2 guests
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'end',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="customized-1"
                                            defaultValue={2.5}
                                            precision={0.5}
                                            max={1}
                                        />
                                        <Typography
                                            sx={{ pl: 1, pr: '2px' }}
                                            fontWeight={'bold'}
                                            component={'span'}
                                        >
                                            4.82
                                        </Typography>
                                        <Typography sx={{ opacity: 0.3 }}>(67)</Typography>
                                    </Box>
                                    <Typography fontWeight={'bold'}>
                                        ¢95{' '}
                                        <span
                                            style={{
                                                opacity: 0.3,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            /night
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '700px' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box width={{ xs: '100%', sm: '230px' }} flexShrink={0}>
                                <Image
                                    src={
                                        'https://res.cloudinary.com/dhzrnosrb/image/upload/v1686621625/Learn-NextJs/item1_ukylwk.png'
                                    }
                                    width={200}
                                    height={140}
                                    layout="responsive"
                                    alt="work thumbnail"
                                />
                            </Box>

                            <Box sx={{ ml: 3, flex: 1 }}>
                                <Stack height={'80%'} direction={'column'}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            direction: 'row',
                                        }}
                                    >
                                        <Typography
                                            sx={{ opacity: 0.3 }}
                                            fontWeight={'400'}
                                            component={'span'}
                                        >
                                            Entire apartment in Center City
                                        </Typography>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>

                                    <Typography variant="h6" component={'span'}>
                                        Sunset Paradise near Center City
                                    </Typography>
                                    <Typography sx={{ opacity: 0.3 }} component={'span'}>
                                        2 guests
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="customized-1"
                                            defaultValue={2.5}
                                            precision={0.5}
                                            max={1}
                                        />
                                        <Typography
                                            sx={{ pl: 1, pr: '2px' }}
                                            fontWeight={'bold'}
                                            component={'span'}
                                        >
                                            4.82
                                        </Typography>
                                        <Typography sx={{ opacity: 0.3 }}>(67)</Typography>
                                    </Box>
                                    <Typography fontWeight={'bold'}>
                                        ¢95{' '}
                                        <span
                                            style={{
                                                opacity: 0.3,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            /night
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>

                <Box flex={1} height={'full'}>
                    <Map />
                </Box>
            </Stack>
        </React.Fragment>
    );
}
