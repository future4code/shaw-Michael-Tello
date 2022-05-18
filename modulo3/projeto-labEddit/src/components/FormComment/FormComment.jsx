import { Card, TextareaAutosize, Typography } from "@mui/material";

export default function FormComment(props) {
  return (
    <form onSubmit={props.postComment}>
      <Card variant="outlined">
        <Typography>Escreva Seu Comentário</Typography>
        <TextareaAutosize
          className="form-control"
          aria-label="With textarea"
          maxRows={920}
          name="body"
          onChange={props.onChange}
          value={props.form.body}
          style={{ width: 420 }}
        />
      </Card>

      <button className="btn btn-info">Postar</button>
    </form>
  );
}
