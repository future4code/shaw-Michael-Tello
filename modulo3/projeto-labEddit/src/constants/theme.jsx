import { createTheme } from '@mui/material/styles';
import { primaryColor,neutralColor } from './colors';

export const theme = createTheme({
palette: {
primary: {
main: primaryColor,
contrastText:'#ffff'
},
text: {
	primary: neutralColor
}
},
});