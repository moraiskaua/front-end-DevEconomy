import { Spinner } from './Spinner';

interface PageLoaderProps {}

const PageLoader: React.FC<PageLoaderProps> = ({}) => {
  return (
    <div className="h-full w-full fixed z-50 inset-0 bg-gray-50 grid place-items-center">
      <Spinner />
    </div>
  );
};

export default PageLoader;
