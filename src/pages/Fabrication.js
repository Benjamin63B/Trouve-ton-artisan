import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artisansData from '../data/datas.json';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Fabrication = () => {
  const [fabricationArtisans, setFabricationArtisans] = useState([]);

  useEffect(() => {
    const filteredArtisans = artisansData.filter(artisan => artisan.category === 'Fabrication');
    setFabricationArtisans(filteredArtisans);
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

    return (
        <main>
            <section>
                <h2>Fabrication</h2>
                <div className="row">
                    {fabricationArtisans.length > 0 ? fabricationArtisans.map(artisan => (
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
                                    <p className="card-text">Localisation: {artisan.location}</p>
                                </div>

                            </div>
                        </div>
                    )) : <p>Aucun artisan trouvé.</p>}
                </div>
            </section>
        </main>
    );
};


export default Fabrication;
