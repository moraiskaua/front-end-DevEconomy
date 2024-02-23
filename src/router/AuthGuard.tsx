import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ isPrivate }) => {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
