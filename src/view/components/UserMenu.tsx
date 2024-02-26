interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = ({}) => {
  return (
    <div className="bg-teal-50 rounded-full size-12 flex justify-center items-center border border-teal-100">
      <span className="text-teal-900 text-sm tracking-[-0.5] font-medium">
        KM
      </span>
    </div>
  );
};

export default UserMenu;
