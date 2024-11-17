import { Comment } from "../../types/forumType";

type PostCommentProps = {
    comment: Comment;
  };

function PostComment(props: PostCommentProps): JSX.Element {
    const {comment} = props;
    return (
        <li className="comment-item">
            <p className="comment-email">{comment.email}</p>
            <h4 className="comment-author">{comment.name}</h4>
            <p className="comment-text">{comment.body}</p>
        </li>
    );
  };
  
  export default PostComment;