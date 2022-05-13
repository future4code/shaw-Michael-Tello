import { Button, Card, Grid, TextField, Typography } from "@mui/material";



export default function FormComment(props){
    return(
        <form onSubmit={props.postComment}>


<Card variant="outlined">
<Typography>Escreva Seu Comentário</Typography>
<TextField variant="filled" rows={4}>ewfewf</TextField>
<Grid >
<Button variant="contained">Postar</Button>
</Grid>
</Card>
          {/* <div className="input-group">
            <span className="input-group-text">Escreva Seu Comentário</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              name="body"
              onChange={props.onChange}
              value={props.form.body}
            ></textarea>
          </div> */}
          <button className="btn btn-info">Postar</button>
        </form>
    )
}