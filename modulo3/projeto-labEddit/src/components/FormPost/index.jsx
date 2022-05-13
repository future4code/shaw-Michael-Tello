import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export function FormPost(props) {
  return (
    <form onSubmit={props.submitPost}>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
				<Typography variant="caption" >
				Enviado por: labaluno83 
				</Typography>

        <Typography paragraph borderTop={1}>
          Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
          tecnologia usam Linux ?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <ArrowCircleUpIcon color="primary" />
          <p>1.2K</p>
          <ArrowCircleDownIcon color="primary" />
        </IconButton>

        <IconButton>
          <MailOutlineIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
    </form>
  );
}
