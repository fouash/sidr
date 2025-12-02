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
import { SidrHairPage } from './components/SidrHairPage';
import { SidrSkinPage } from './components/SidrSkinPage';
import { SidrBodyPage } from './components/SidrBodyPage';
import { SidrRecipesPage } from './components/SidrRecipesPage';
import { SidrGuidePage } from './components/SidrGuidePage';
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
    
    switch (path) {
      case '/':
        setActivePage(Page.HOME);
        break;
      case '/products':
        setActivePage(Page.PRODUCTS);
        break;
      case '/benefits':
        setActivePage(Page.BENEFITS);
        break;
      case '/benefits/general':
      case '/benefits/hair':
      case '/benefits/skin':
        setActivePage(Page.BENEFITS);
        break;
      case '/sidr-hair':
        setActivePage(Page.SIDR_HAIR);
        break;
      case '/sidr-skin':
        setActivePage(Page.SIDR_SKIN);
        break;
      case '/sidr-body':
        setActivePage(Page.SIDR_BODY);
        break;
      case '/sidr-recipes':
        setActivePage(Page.SIDR_RECIPES);
        break;
      case '/sidr-guide':
        setActivePage(Page.SIDR_GUIDE);
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
      case Page.SIDR_HAIR:
        navigate('/sidr-hair');
        break;
      case Page.SIDR_SKIN:
        navigate('/sidr-skin');
        break;
      case Page.SIDR_BODY:
        navigate('/sidr-body');
        break;
      case Page.SIDR_RECIPES:
        navigate('/sidr-recipes');
        break;
      case Page.SIDR_GUIDE:
        navigate('/sidr-guide');
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
        <Route path="/sidr-hair" element={<SidrHairPage />} />
        <Route path="/sidr-skin" element={<SidrSkinPage />} />
        <Route path="/sidr-body" element={<SidrBodyPage />} />
        <Route path="/sidr-recipes" element={<SidrRecipesPage />} />
        <Route path="/sidr-guide" element={<SidrGuidePage />} />
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