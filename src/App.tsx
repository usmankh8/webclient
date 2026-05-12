import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Printers from './pages/Printers.tsx';
import ProductDetail from './pages/ProductDetail.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/3d-printer" element={<Printers />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            {/* Fallback for other links in the header/footer */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
