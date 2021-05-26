import React from 'react'
import Navbar from './Navbar';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

export default function Homepage() {
    return (
        <div>
            <ThemeProvider theme = {theme}>
                <Navbar/>
            </ThemeProvider>
            <Box alignItems="center" p={2} display = "flex" justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "white" width = "100%" height = "10vh" borderColor="primary.main" borderRadius={16} marginBottom="8px">
            Testttt
            </Box>
        </div>
    )
}
