import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { store } from "../../store";
import { deletePostAction, fetchPostAction, fetchPostCommentsAction } from "../../store/api-actions";
import Header from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getPost, getPostComments, getPostUsers } from "../../store/six-cities-data/selectors";
import PostComment from "../../components/post-comment/post-comment";
import CommentForm from "../../components/comment-form/comment-form";

function PostPage(): JSX.Element | undefined {
    const dispatch = useAppDispatch();
    const params = useParams();
    const postId = params.id;

    useEffect(() => {
        store.dispatch(fetchPostCommentsAction(postId!));
        store.dispatch(fetchPostAction(postId!));
    }, []);

    const postState = useAppSelector(getPost);
    const userState = useAppSelector(getPostUsers).find(user => user.id == postState.userId);
    const postCommentsState = useAppSelector(getPostComments);

    const handleDeletePost = () => {
        if (window.confirm('Вы действительно хотите удалить пост?')) {
            dispatch(deletePostAction(postId!));
        };
    };

    if (postId) {
        return (
    <div className="post-page">
      <Header />
      <div className="post-details">
      <div className="post-header-row">
        <h2 className="post-author">{userState?.username} <span className="post-username">{userState?.email}</span></h2>
        <button onClick={handleDeletePost} className="delete-post-button">
            Delete Post
          </button>
     </div>
        <h3 className="post-title">{postState.title}</h3>
        <p className="post-content">
          {postState.body}
        </p>
    </div>

      <section className="comments-section">
        <h3>Comments</h3>
        <ul className="comments-list">
            {postCommentsState.map((comment) => <PostComment comment={comment} key={comment.id}/>)}
        </ul>
      </section>
      <CommentForm postId={postId}/>
    </div>
  );
    };
};

export default PostPage;