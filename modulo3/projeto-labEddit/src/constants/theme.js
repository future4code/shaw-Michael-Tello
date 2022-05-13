import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { borderRadius } from "@mui/system";
import { primaryColor, neutralColor } from "./colors";

export const theme = createTheme({

components:{
MuiTextField:{
	styleOverrides:{
		root:{
			color: '#000',
			background:' #fff',
			outline:'none'
		}
	}
}
},

  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#ffff",
    },
    secondary: {
      main: "#EDEDED",
      contrastText: primaryColor,
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: "unset",
  },

	
	
});
