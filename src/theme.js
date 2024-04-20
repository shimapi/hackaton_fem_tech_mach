import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
    },
});

export default theme;