import React from 'react'
import Navbar from './Navbar';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/styles';

export default function Contact() {
    return (
        <div>
            <ThemeProvider theme = {theme}>
                <Navbar></Navbar>
            </ThemeProvider>
            <h1>Need Help or Advice?</h1>
            <br></br>
            <h1>Need Help or Advice?</h1>
        </div>
    )
}
