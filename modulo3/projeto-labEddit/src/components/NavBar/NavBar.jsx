import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TitleNav } from "./styled";

export default function NavBar() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <TitleNav>
        <span>LabEddit</span>
        <i className="bi bi-chat-quote"></i>
      </TitleNav>
      <Button variant="contained" size="small" onClick={Logout}>
        Logout
      </Button>
    </nav>
  );
}
