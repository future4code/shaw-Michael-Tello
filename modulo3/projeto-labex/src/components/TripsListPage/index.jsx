import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";

function TripsListPage() {
  return (
    <div className="TripsListPageContainer" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <PageTitle title={"Lista de Viagens"} />
      <Link to={"/viagens/criar"}>
        <Button variant="contained">Criar viagem</Button>
      </Link>

      <List component="nav" aria-label="secondary mailbox folders">
        <Link to={"/viagens/detalhe"}>
          <ListItem button>
            <ListItemText primary="Viagem para marte" />
          </ListItem>
        </Link>
        <Link to={"/viagens/detalhe"}>
          <ListItem button>
            <ListItemText
              primary="Viagem para a lua"
             
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

export default TripsListPage;
