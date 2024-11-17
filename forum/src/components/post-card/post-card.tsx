import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { getPostsComments, getPostUsers } from "../../store/six-cities-data/selectors";
import { Post } from "../../types/forumType";
import { Link } from "react-router-dom";

type PostCardProps = {
    post: Post;
};

function PostCard(props: PostCardProps): JSX.Element {
    const {post} = props;
    const commentsState = useAppSelector(getPostsComments).filter(commen => commen.postId == post.id);
    const userState = useAppSelector(getPostUsers).find(user => user.id == post.userId);
    const [isLike, setIsLike] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="forum-post">
        <div className="post-header">
            <h3>{userState?.name} {}</h3>
        </div>
        <h4 className="post-title">
          <Link to={`/post-page/${post.id}`} >
            {post.title}
          </Link>
        </h4>
        <p className="post-content">{post.body}</p>
        <div className="post-footer">
            <span className="post-comments">Comments: {commentsState.length}</span>
            <div className="post-actions">
            <button
                  className={`like-button ${isLike ? 'active' : ''}`}
                  onClick={() => setIsLike(!isLike)}
                >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill='#fab6c8'
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.54 0 2.81.99 3.36 2.36h1.29C12.19 5.99 13.46 5 15 5 17.08 5 18.5 6.42 18.5 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                </button>
            <button className={`favorite-button ${isFavorite ? 'active' : ''}`}
                  onClick={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? '★ Favorite' : '☆ Add to Favorites'}
            </button>
            </div>
        </div>
    </div>
  );
};

export default PostCard;