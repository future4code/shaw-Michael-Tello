import { Button, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useTripsList } from "../../hooks/useTripsList";
import PageTitle from "../PageTitle";

function TripsListPage() {
  const trips = useTripsList();
useProtectedPage()

  const tripList = trips.map((trip) => {
    return (
      <Link to={`/viagens/detalhe/${trip.id}`}>
        <ListItem button>
          <ListItemText primary={trip.name} />
        </ListItem>
      </Link>
    );
  });

  return (
    <div
      className="TripsListPageContainer"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <PageTitle title={"Lista de Viagens"} />
      <Link to={"/viagens/criar"}>
        <Button variant="contained">Criar viagem</Button>
      </Link>

      {tripList}
    </div>
  );
}

export default TripsListPage;
