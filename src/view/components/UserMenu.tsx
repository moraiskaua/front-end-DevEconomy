import { ExitIcon } from '@radix-ui/react-icons';
import DropDownMenu from './DropdownMenu';
import { useAuth } from '../../app/hooks/useAuth';

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = ({}) => {
  const { signout } = useAuth();

  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger>
        <div className="bg-teal-50 rounded-full size-12 flex justify-center items-center border border-teal-100">
          <span className="text-teal-900 text-sm tracking-[-0.5] font-medium">
            KM
          </span>
        </div>
      </DropDownMenu.Trigger>

      <DropDownMenu.Content className="w-32 mr-3 mt-2">
        <DropDownMenu.Item
          className="flex items-center justify-between"
          onSelect={signout}
        >
          Sair <ExitIcon className="size-4" />
        </DropDownMenu.Item>
      </DropDownMenu.Content>
    </DropDownMenu.Root>
  );
};

export default UserMenu;
