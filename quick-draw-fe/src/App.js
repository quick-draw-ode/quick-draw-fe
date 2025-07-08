import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('./main/pages/MainPage'));
const NotFoundPage = loadable(() => import('./global/pages/NotFoundPage'));
const MainLayout = loadable(() => import('./global/layouts/MainLayout'));

/* drawing pages */
const DrawPage = loadable(() => import('./drawing/pages/DrawPage'));

/* login 페이지 */
const LoginPage = loadable(() => import("./member/pages/LoginPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />

        <Route path="draw" element={<DrawPage />} />

        <Route path="member/login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
