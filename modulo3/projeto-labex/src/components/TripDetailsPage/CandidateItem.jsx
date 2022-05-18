import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function CandidateItem(props) {
  const approveCandidate = () => {
    props.decideCandidate(true, props.candidate.id);
  };

  const rejectCandidate = () => {
    props.decideCandidate(false, props.candidate.id);
  };
  return (
    <ListItem>
      <ListItemText primary={props.candidate.name} />
      <ListItemSecondaryAction>
        <IconButton onClick={approveCandidate}>
          <CheckCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={rejectCandidate}>
          <HighlightOffIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default CandidateItem;
