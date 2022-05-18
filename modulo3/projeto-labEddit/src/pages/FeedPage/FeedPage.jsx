import GetPostsFeed, { DeleteVote } from "./requests";
import { CreatePost, PostVote } from "./requests";
import { DivFeed, FirstDivFeed} from "./styled";
import useForm from "../../Hooks/UseForm";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../Hooks/UseProtectedPage";
import PostsFeed from "../../components/PostsFeed/PostsFeed";
import FormPost from "../../components/FormPost/FormPost";
import NavBar from "../../components/NavBar/NavBar";
import PaginationCount from "../../components/PaginationCount/PaginationCount";
import { Alert } from "@mui/material";

export default function FeedPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const [arrPosts, GetPostsAtt, loading] = GetPostsFeed();
  const [msgPost, functionPost] = CreatePost(form, GetPostsAtt);
  const [stateVote, VoteFunction, idVote] = PostVote();
  const [stateVoteDel, functionDelete, idVoteDel] = DeleteVote();

  const PostDetails = (id) => {
    navigate(`/PostPage/${id}`);
  };

  const VoteValidate = (id, dir) => {
    const newArr = arrPosts.filter((item) => {
      return item.id === id;
    });

    if ((dir === 1 && newArr[0].userVote === 1) ||(dir === -1 && newArr[0].userVote === -1)) {
      functionDelete(id, dir, GetPostsAtt);
      return false;
    }
    VoteFunction(id, dir, GetPostsAtt);
  };

  const submitPost = (e) => {
    e.preventDefault();
    functionPost();
    clear();
  };

  return (
    <FirstDivFeed>
      <NavBar />
      <DivFeed>
        {msgPost && <Alert severity="success">Post criado com sucesso!</Alert>}
        <FormPost 
        submitPost={submitPost} 
        onChange={onChange} 
        form={form} 
        />
        <PaginationCount 
        GetPostsAtt={GetPostsAtt}
        />
        <PostsFeed
          loading={loading}
          arrPosts={arrPosts}
          PostDetails={PostDetails}
          VoteValidate={VoteValidate}
          stateVote={stateVote}
          idVote={idVote}
          stateVoteDel={stateVoteDel}
          idVoteDel={idVoteDel}
        />
      </DivFeed>
    </FirstDivFeed>
  );
}
