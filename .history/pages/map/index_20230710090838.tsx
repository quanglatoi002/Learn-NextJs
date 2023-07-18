import { Box, Container, Stack } from '@mui/material';
import Content from './content';
import Header from './header';
import Selects from './selects';

export default function App() {
    return (
        <Stack component={'header'} pt={4}>
            <Container sx={{ color: 'black' }} maxWidth="xl">
                <Header />
                <Selects />
                <Content />
                <Box height={150}></Box>
            </Container>
        </Stack>
    );
}
