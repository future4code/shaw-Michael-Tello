import { createTheme } from '@mui/material/styles';
import { primaryColor,neutralColor } from './colors';

export const theme = createTheme({
palette: {
primary: {
main: primaryColor,
contrastText:'#ffff'
},
secondary:{
main:'#EDEDED',
contrastText: primaryColor
},
text: {
	primary: neutralColor
}
},
});