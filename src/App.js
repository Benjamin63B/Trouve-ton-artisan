import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Batiment from './pages/Batiment';
import Services from './pages/Services';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import ArtisanProfile from './pages/ArtisanProfile';
import NotFound from './pages/NotFound';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        <div className="container mb-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/batiment" element={<Batiment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/alimentation" element={<Alimentation />} />
            <Route path="/artisan/:id" element={<ArtisanProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
