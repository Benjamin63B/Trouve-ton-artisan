import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import artisansData from "../data/datas.json";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const HomePage = () => {
  const [topArtisans, setTopArtisans] = useState([]);
  const [allArtisans, setAllArtisans] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const featuredArtisans = artisansData
      .filter((artisan) => artisan.top)
      .slice(0, 3);
    setTopArtisans(featuredArtisans);
    setAllArtisans(artisansData);
  }, []);

  const renderStars = (note) => {
    const rating = parseFloat(note);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="#ffd700" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} color="#ffd700" />);
      } else {
        stars.push(<FaRegStar key={i} color="#ffd700" />);
      }
    }
    return stars;
  };

  // ✅ Slider Navigation
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div>
      <section className="how-to-section">
        <h2>Comment trouver mon artisan ?</h2>
        <div className="step">
          <h3>1. Choisir la catégorie d’artisanat dans le menu</h3>
          <p>
            Naviguez dans notre menu pour sélectionner la catégorie d’artisanat
            qui correspond à vos besoins.
          </p>
        </div>
        <div className="step">
          <h3>2. Choisir un artisan</h3>
          <p>
            Explorez les profils des artisans disponibles dans la catégorie
            choisie.
          </p>
        </div>
        <div className="step">
          <h3>3. Le contacter via le formulaire de contact</h3>
          <p>
            Une fois votre artisan choisi, contactez-le directement via notre
            formulaire.
          </p>
        </div>
        <div className="step">
          <h3>4. Une réponse sous 48h</h3>
          <p>
            Votre demande sera traitée rapidement et vous recevrez une réponse
            sous 48 heures.
          </p>
        </div>
      </section>

      {/* ✅ Section Tous les Artisans en Slider */}
      <section className="all-artisans-section">
        <h2>Nos Artisans</h2>
        <div className="slider-container">
          {/* Flèche gauche */}
          <button className="slider-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="slider" ref={sliderRef}>
            {allArtisans.map((artisan) => (
              <div key={artisan.id} className="artisan-card">
                <div className="card">
                  <div className="card-body">
                    <Link to={`/artisan/${artisan.id}`}>
                      <h5 className="card-title">{artisan.name}</h5>
                    </Link>
                    <p className="card-text">
                      Note: {artisan.note} {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">Spécialité: {artisan.specialty}</p>
                    <p className="card-text">
                      Localisation: {artisan.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flèche droite */}
          <button className="slider-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* ✅ Section Artisans du Mois */}
      <section>
        <h2>Artisans du mois</h2>
        <div className="row">
          {topArtisans.length > 0 ? (
            topArtisans.map((artisan) => (
              <div key={artisan.id} className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <Link to={`/artisan/${artisan.id}`}>
                      <h5 className="card-title">{artisan.name}</h5>
                    </Link>
                    <p className="card-text">
                      Note: {artisan.note} {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">Spécialité: {artisan.specialty}</p>
                    <p className="card-text">
                      Localisation: {artisan.location}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucun artisan du mois trouvé.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
