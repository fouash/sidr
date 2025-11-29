import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { AIExpert } from './components/AIExpert';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { SidrGeneral } from './components/SidrGeneral';
import { SidrHair } from './components/SidrHair';
import { SidrSkin } from './components/SidrSkin';
import { Contact } from './components/Contact';
import { Page } from './types';

// Wrapper component to handle routing state within Layout
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  // Sync active page state
  useEffect(() => {
    const path = location.pathname;
    
    if (path.startsWith('/benefits')) {
      setActivePage(Page.BENEFITS);
    } else {
      switch (path) {
        case '/':
          setActivePage(Page.HOME);
          break;
        case '/products':
          setActivePage(Page.PRODUCTS);
          break;
        case '/expert':
          setActivePage(Page.EXPERT);
          break;
        case '/about':
          setActivePage(Page.ABOUT);
          break;
        case '/contact':
          setActivePage(Page.CONTACT);
          break;
        default:
          setActivePage(Page.HOME);
      }
    }
  }, [location]);

  const handleNavigate = (page: Page) => {
    switch (page) {
      case Page.HOME:
        navigate('/');
        break;
      case Page.PRODUCTS:
        navigate('/products');
        break;
      case Page.BENEFITS:
        navigate('/benefits');
        break;
      case Page.EXPERT:
        navigate('/expert');
        break;
      case Page.ABOUT:
        navigate('/about');
        break;
      case Page.CONTACT:
        navigate('/contact');
        break;
    }
    window.scrollTo(0, 0);
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/benefits/general" element={<SidrGeneral />} />
        <Route path="/benefits/hair" element={<SidrHair />} />
        <Route path="/benefits/skin" element={<SidrSkin />} />
        <Route path="/expert" element={<AIExpert />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;