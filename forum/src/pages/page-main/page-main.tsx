import { useState } from "react";
import Header from "../../components/header/header";
import PostCard from "../../components/post-card/post-card";
import { useAppSelector } from "../../hooks";
import { getPosts, getPostUsers } from "../../store/six-cities-data/selectors";

function PageMain(): JSX.Element | undefined {
  const postsState = useAppSelector(getPosts);
  const usersState = useAppSelector(getPostUsers);
  const [selectedUser, setSelectedUser] = useState(0);

  const filteredPosts = selectedUser === 0
  ? postsState
  : postsState.filter(post => post.userId === selectedUser);

  if (filteredPosts) {
    return (
    <div>
      <Header />
      <div className="user-filter">
        {usersState.map(user => (
          <button
            key={user.id}
            className={`user-filter-button ${selectedUser === user.id ? 'active' : ''}`}
            onClick={() => {
              selectedUser === user.id ? setSelectedUser(0) : setSelectedUser(user.id)}}
          >
            {user.name}
          </button>
        ))}
      </div>
      <main className="forum-content">
          {filteredPosts.map((post) => <PostCard post={post} key={post.id}/>)}
      </main>
    </div>
  );
  };
};

export default PageMain;