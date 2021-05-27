import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#14248A',
        },
        secondary: {
            main: '#FF3366',
        }
    },
    typography: {
        fontFamily: [
          'Varela Round',
        ].join(','),
    },
});

export default theme;