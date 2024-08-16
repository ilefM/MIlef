import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
      <Header />
      <div className="min-h-screen pt-16 pb-8 sm:pt-24 flex flex-col text-textColor dark:text-slate-50 font-dosis">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
