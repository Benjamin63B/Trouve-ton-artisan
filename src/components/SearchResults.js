import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artisansData from '../data/datas.json';

const SearchResults = ({ searchQuery, setSearchQuery }) => {
  const [filteredArtisans, setFilteredArtisans] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const results = artisansData.filter(artisan =>
        artisan.name.toLowerCase().includes(query) ||
        artisan.specialty.toLowerCase().includes(query) ||
        artisan.location.toLowerCase().includes(query)
      );
      setFilteredArtisans(results);
    } else {
      setFilteredArtisans([]);
    }
  }, [searchQuery]);

  const handleClick = () => {
    setSearchQuery(''); // Vide l'input après le clic sur un artisan
  };

  return (
    <div className="search-results mt-2">
      {filteredArtisans.length > 0 ? (
        <ul>
          {filteredArtisans.map(artisan => (
            <li key={artisan.id}>
              <div className="result-icon">🔍</div>
              <Link to={`/artisan/${artisan.id}`} className="search-result-link" onClick={handleClick}>
                {artisan.name} - {artisan.specialty} - {artisan.location}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        searchQuery.trim() !== '' && <p className="no-results">Aucun artisan trouvé.</p>
      )}
    </div>
  );
};

export default SearchResults;
