import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { sendCommentAction } from "../../store/api-actions";

type CommentFormProps = {
    postId: string;
  };

function CommentForm(props: CommentFormProps): JSX.Element {
    const {postId} = props;
    const [userComment, setUserComment] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const dispatch = useAppDispatch();

    const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(sendCommentAction({
            id: postId,
            userId: '1',
            body: userComment,
            title: userName,
            userEmail: userEmail,
        }));
        setUserComment('');
        setUserName('');
        setUserEmail('');
      };

    return (
        <section className="add-comment-section">
        <h3>Add a Comment</h3>
        <form  className="add-comment-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={userName}
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                const value = target.value;
                setUserName(value);
              }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={userEmail}
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                const value = target.value;
                setUserEmail(value);
              }}
            required
          />
          <textarea
            name="text"
            placeholder="Your comment"
            value={userComment}
            onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
                const value = target.value;
                setUserComment(value);
              }}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  };
  
  export default CommentForm;