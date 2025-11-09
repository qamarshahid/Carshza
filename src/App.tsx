import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Trust from './pages/Trust';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import QuickContactBar from './components/QuickContactBar';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  const handleNavigate = (page: string, carId?: number) => {
    setCurrentPage(page);
    if (carId !== undefined) {
      setSelectedCarId(carId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services onNavigate={handleNavigate} />;
      case 'Inventory':
        return <Inventory onNavigate={handleNavigate} />;
      case 'CarDetail':
        return <CarDetail carId={selectedCarId || 1} onNavigate={handleNavigate} />;
      case 'Gallery':
        return <Gallery />;
      case 'Testimonials':
        return <Testimonials />;
      case 'Contact':
        return <Contact />;
      case 'Trust & Safety':
        return <Trust />;
      case 'Privacy Policy':
        return <Privacy />;
      case 'Terms of Service':
        return <Terms />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <QuickContactBar onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <a
        href="#"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00CFFF] focus:text-black focus:rounded"
      >
        Skip to content
      </a>
    </div>
  );
}

export default App;
