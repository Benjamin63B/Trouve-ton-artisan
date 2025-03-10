import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";

const Header = ({ onSearch, searchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onSearch(localSearchQuery);
  }, [localSearchQuery, onSearch]);

  const handleCategoryClick = (category) => {
    navigate(`/${category.toLowerCase()}`);
    setMenuOpen(false); // Ferme le menu après un clic
  };

  return (
    <header className="p-3">
      <div className="container">
        <Link to="/" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
            alt="Logo"
            height="100"
          />
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <button
                className="nav-link btn-link"
                onClick={() => handleCategoryClick("Batiment")}
              >
                Bâtiment
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn-link"
                onClick={() => handleCategoryClick("Services")}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn-link"
                onClick={() => handleCategoryClick("Fabrication")}
              >
                Fabrication
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn-link"
                onClick={() => handleCategoryClick("Alimentation")}
              >
                Alimentation
              </button>
            </li>
          </ul>
        </nav>
        <div className="search-container">
          <input
            type="text"
            className="form-control"
            placeholder="Recherche..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
          {localSearchQuery && <SearchResults searchQuery={localSearchQuery} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
