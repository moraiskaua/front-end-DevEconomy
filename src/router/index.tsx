import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthGuard from './AuthGuard';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Sign up</h1>} />
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
