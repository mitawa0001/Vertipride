import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Webdev from '../src/pages/web_dev';
import Aidev from '../src/pages/al_dev';
import Uiux from '../src/pages/ui_ux';
import Quality from '../src/pages/quality';
import Php from '../src/pages/php';
import Ban from './menu/Bar';
import Foo from './component/single_hiring';
import Products from './component/Products';
import ProductDetail from './component/productdetails';
import Login from './pages/Login';
import Gallery from '../src/pages/gallery';
import Working from './pages/working';
import Preloader from './component/Preloader';
import Blogs from './blog/blogs';
import Blogdetails from './blog/blogdetails';
import WebAndroid from './pages/web_android';

// Lazy-loaded components
const Aboutus = lazy(() => import('./pages/about_us'));
const Home = lazy(() => import('./pages/home'));
const Aboutteam = lazy(() => import('./pages/about_team'));
const Career = lazy(() => import('./pages/career'));
const LifeVertipride = lazy(() => import('./pages/lifeVertipride'));
const Contact = lazy(() => import('./pages/contact'));
const Androiddev = lazy(() => import('./pages/Android_dev'));
const Iosdev = lazy(() => import('./pages/ios_Dev'));
const UiUxPortfolio = lazy(() => import('./pages/Ui_Ux_portfolio'));
const HospitalErp = lazy(() => import('./pages/hospital_ERP'));
const Flutter = lazy(() => import('./pages/flutter'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader />}

      {/* Main App */}
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="aboutteam" element={<Aboutteam />} />
            <Route path="career" element={<Career />} />
            <Route path="lifeVertipride" element={<LifeVertipride />} />
            <Route path="android_dev" element={<Androiddev />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ios_dev" element={<Iosdev />} />
            <Route path="flutter" element={<Flutter />} />
            <Route path="web_dev" element={<Webdev />} />
            <Route path="ai_dev" element={<Aidev />} />
            <Route path="ui_us" element={<Uiux />} />
            <Route path="quality" element={<Quality />} />
            <Route path="php" element={<Php />} />
            <Route path="ban" element={<Ban />} />
            <Route path="foo" element={<Foo />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="hospital_erp" element={<HospitalErp />} />
            <Route path="working" element={<Working />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="blog/:blogId" element={<Blogdetails />} />
            <Route path="Ui_Ux_portfolio" element={<UiUxPortfolio />} />
            <Route path="web_android" element={<WebAndroid />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;