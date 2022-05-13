import { Toolbar, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinatos";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export function Header() {
  const navigate = useNavigate;

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <S.Nav position="static" color="secondary">
      <Toolbar>
        <S.Logo onClick={() => goToFeedPage(navigate)}>
          <AdbIcon />
          <p> LABENU</p>
        </S.Logo>

        <Button onClick={Logout}>Logout</Button>
       
      </Toolbar>
    </S.Nav>
  );
}
