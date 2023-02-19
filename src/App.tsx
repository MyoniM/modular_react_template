import { Router, Outlet } from 'react-location';

import Header from './components/Header';
import Footer from './components/Footer';

import { routes, location } from './router';

export default function App() {
  return (
    <Router routes={routes} location={location}>
      <Header />
      <Outlet />
      <Footer />
    </Router>
  );
}
