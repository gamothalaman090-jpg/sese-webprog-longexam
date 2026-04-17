import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-primary-500/30 selection:text-primary-500">
      <NavBar />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;



