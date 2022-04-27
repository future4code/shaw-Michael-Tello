import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function CandidateItem() {
  return (
    <ListItem>
      <ListItemText primary="Candidato 1" />
      <ListItemSecondaryAction>
        <IconButton >
          <CheckCircleOutlineIcon />
        </IconButton>
        <IconButton>
          <HighlightOffIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default CandidateItem;
