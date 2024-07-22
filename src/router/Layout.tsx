import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
      <Header />
      <div className="mt-16 sm:mt-32 flex flex-col text-textColor dark:text-slate-50 font-dosis">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
