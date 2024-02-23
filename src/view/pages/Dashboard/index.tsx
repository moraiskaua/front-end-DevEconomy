import { useAuth } from '../../../app/hooks/useAuth';
import Button from '../../components/Button';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { signout } = useAuth();

  return (
    <div>
      <Button onClick={signout}>Sair</Button>
    </div>
  );
};

export default Dashboard;
