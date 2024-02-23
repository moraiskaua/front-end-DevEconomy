import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthGuard from './AuthGuard';
import Login from '../view/pages/Login';
import Register from '../view/pages/Register';
import AuthLayout from '../view/layouts/AuthLayout';
import Dashboard from '../view/pages/Dashboard';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
