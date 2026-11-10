import { Outlet, useLocation } from 'react-router';
import Layout from './components/Layout';

export default function Root() {
  const location = useLocation();

  if (location.pathname.startsWith('/versao-2')) {
    return <Outlet />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
