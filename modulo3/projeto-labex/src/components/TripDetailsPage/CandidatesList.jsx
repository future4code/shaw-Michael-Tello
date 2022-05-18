import { CardContent, Typography, Card, List } from "@mui/material";
import CandidateItem from "./CandidateItem";

function CandidatesList(props) {
  const candidatesList = props.candidates.map((candidate) => {
    return (
      <CandidateItem
        candidate={candidate}
        key={candidate.id}
       
        decideCandidate={props.decideCandidate}
      />
    );
  });

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Lista de Candidatos
        </Typography>
        <List>{candidatesList}</List>
      </CardContent>
    </Card>
  );
}

export default CandidatesList;
