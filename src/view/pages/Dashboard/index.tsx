import UserMenu from '../../components/UserMenu';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="h-full w-full p-8 pt-6 flex flex-col gap-4">
      <header className="h-12 flex justify-between items-center">
        <h2 className="text-teal-900 font-bold text-lg">DevEconomy</h2>
        <UserMenu />
      </header>
      <main className="flex-1">
        <div className="flex gap-4">
          <div className="w-1/2">
            <Accounts />
          </div>
          <div className="w-1/2">
            <Transactions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
