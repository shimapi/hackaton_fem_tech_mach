import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        }
        //Override colors from palete as needed
    },
});

export default theme;