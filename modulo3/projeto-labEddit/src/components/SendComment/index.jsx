import { Button, TextareaAutosize } from "@mui/material";
import * as S from './styled'
import { FeedItem } from "../FormPost";

export default function SendComment() {
  return (
    <>
      <S.FormContainer>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Escreva seu post..."
          style={{ width: 200 }}
        />

        <Button variant="contained">Postar</Button>

        <FeedItem />
      </S.FormContainer>
    </>
  );
}
