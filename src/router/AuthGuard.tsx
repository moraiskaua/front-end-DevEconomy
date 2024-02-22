import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ isPrivate }) => {
  const signIn = false;

  if (!signIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signIn && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
