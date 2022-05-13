
import {
  CreatePost,
  PostVote,
  GetPostsFeed,
  // DeleteVote,
} from "../../services/request";
// import { PostsFeed } from '../../components/FormPost'
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import SendComment from "../../components/SendComment";
import { FormPost } from "../../components/FormPost";
import { Header } from "../../components/Header";
// import {Pagination} from "../../components/Pagination";
import * as S from "./styled";

export function FeedPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const [arrPosts, GetPostsAtt, loading] = GetPostsFeed();
  const [msgPost, functionPost] = CreatePost(form, GetPostsAtt);
  const [stateVote, VoteFunction, idVote] = PostVote();
  // const [stateVoteDel, functionDelete, idVoteDel] = DeleteVote();

  const PostDetails = (id) => {
    navigate(`/PostPage/${id}`);
  };

  const VoteValidate = (id, dir) => {
    const newArr = arrPosts.filter((item) => {
      return item.id === id;
    });

    if (
      (dir === 1 && newArr[0].userVote === 1) ||
      (dir === -1 && newArr[0].userVote === -1)
    ) {
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
    <S.FeedContainer>
      <Header />
      <div className="DiFeed">
        {msgPost && <div>Post Criado com Sucesso ! </div>}
        <FormPost 
				submitPost={submitPost} 
				onChange={onChange}
				 form={form}
				  />
        {/* <Pagination 
        GetPostsAtt={GetPostsAtt}
        /> */}

        {/* <PostsFeed
				loading={loading}
				arrPosts={arrPosts}
				PostDetails={PostDetails}
				VoteValidate={VoteValidate}
				stateVote={stateVote}
				idVote={idVote}
				stateVoteDel={stateVoteDel}
				idVoteDel={idVoteDel}
				/> */}
      </div>

      <SendComment />
    </S.FeedContainer>
  );
}
