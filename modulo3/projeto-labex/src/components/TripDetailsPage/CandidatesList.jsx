import { CardContent, Typography, Card, List } from "@mui/material";
import CandidateItem from "./CandidateItem";

function CandidatesList() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Lista de Candidatos
        </Typography>
        <List>
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </List>
      </CardContent>
    </Card>
  );
}

export default CandidatesList;
