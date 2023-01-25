import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'

const SharedLayout = () => {
    return (
        <Box p={5}>
            <Navbar/>
            <Outlet/>
        </Box>
    )
}

export default SharedLayout;
