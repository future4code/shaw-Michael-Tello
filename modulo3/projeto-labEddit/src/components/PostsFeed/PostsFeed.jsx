import { CardFeedPost, DivComentButton } from "./styled";
import GifLoading from "../../img/vegeta.webp";
import moment from "moment";
import { Alert, Button } from "@mui/material";

export default function PostsFeed(props) {
  const arrPosts = props.arrPosts;

  const Posts = arrPosts.map((item) => {
    return (
      <CardFeedPost key={item.id}>
        <div className="card-header">
          <div>
            Postado Por <i>{item.username}</i>
          </div>

          {moment(item.createdAt).startOf("hour").fromNow()}
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.body}</p>
        </div>
        {props.idVote === item.id && props.stateVote === "Positive" ? (
          <Alert severity="info"> Voto Positivo!</Alert>
        ) : null}
        {props.idVote === item.id && props.stateVote === "Negative" ? (
          <Alert severity="error">Voto Negativo!</Alert>
        ) : null}

        <hr />
        <DivComentButton>
          <div>
            {item.userVote === 1 ? (
              <i
                className="bi bi-caret-up-fill"
                style={{ fontSize: "2rem" }}
                onClick={() => props.VoteValidate(item.id, 1)}
              />
            ) : (
              <i
                className="bi bi-caret-up "
                style={{ fontSize: "2rem" }}
                onClick={() => props.VoteValidate(item.id, 1)}
              />
            )}

            {item.voteSum === null ? 0 : item.voteSum}

            {item.userVote === -1 ? (
              <i
                className="bi bi-caret-down-fill"
                style={{ fontSize: "2rem" }}
                onClick={() => props.VoteValidate(item.id, -1)}
              />
            ) : (
              <i
                className="bi bi-caret-down "
                style={{ fontSize: "2rem" }}
                onClick={() => props.VoteValidate(item.id, -1)}
              />
            )}
          </div>
          <Button
            variant="contained"
            onClick={() => props.PostDetails(item.id)}
          >
            {item.commentCount
              ? `${item.commentCount} Comentários`
              : "Nenhum Comentário"}
          </Button>
        </DivComentButton>
      </CardFeedPost>
    );
  });

  return <>{props.loading ? <img src={GifLoading} /> : Posts}</>;
}
