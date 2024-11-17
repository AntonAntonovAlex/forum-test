import { AppRoute } from '../../const';
import {Route, Routes} from 'react-router-dom';
import PageMain from '../../pages/page-main/page-main';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getPostsDataLoadingStatus } from '../../store/six-cities-data/selectors';
import PostPage from '../../pages/post-page/post-page';

function App(): JSX.Element {
  const isPostsDataLoading = useAppSelector(getPostsDataLoadingStatus);

  if (isPostsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain />}
          />
          <Route
            path={AppRoute.PostPage}
            element={<PostPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;