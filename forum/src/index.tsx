import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/aap/aap';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPostsAction, fetchPostsCommentsAction, fetchPostUsersAction } from './store/api-actions';

store.dispatch(fetchPostsAction());
store.dispatch(fetchPostUsersAction());
store.dispatch(fetchPostsCommentsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);