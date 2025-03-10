import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import artisansData from '../data/datas.json';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const ArtisanProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    const selectedArtisan = artisansData.find(artisan => artisan.id === id);
    setArtisan(selectedArtisan);
  }, [id]);

  if (!artisan) {
    return <p className="error-message">Artisan non trouvé</p>;
  }

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
    <div className="artisan-profile">
      <button onClick={() => navigate(-1)} className="back-button">← Retour</button>
      <h2>{artisan.name}</h2>
      <p><strong>Note: </strong>{artisan.note} {renderStars(artisan.note)}</p>
      <p><strong>Spécialité :</strong> {artisan.specialty}</p>
      <p><strong>Localisation :</strong> {artisan.location}</p>
      <p><strong>À propos :</strong> {artisan.about}</p>
      <p><strong>Site web :</strong> {artisan.website ? <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a> : 'Non disponible'}</p>

      <h3>Contactez cet artisan</h3>
      <form className="contact-form" action={`mailto:${artisan.email}`} method="POST" encType="text/plain">
        <label>
          Nom:
          <input type="text" name="name" required />
        </label>
        <label>
          Objet:
          <input type="text" name="subject" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
      {artisan.top && <p className="recommended"><strong>Artisan recommandé ⭐</strong></p>}
    </div>
  );
};

export default ArtisanProfile;
