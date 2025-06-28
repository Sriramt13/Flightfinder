import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // we'll create this CSS

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/flights');
  };

  return (
    <div className="homepage-container">
      <div className="sky">
  <div className="cloud cloud1"></div>
  <div className="cloud cloud2"></div>
  <div className="cloud cloud3"></div>
</div>

      <div className="content-box">
        <h1>Welcome to FlightFinder ✈️</h1>
        <p>
          Discover and book your perfect flight with ease. Plan your journey from New York City to Paris — or anywhere in the world.
        </p>
        <button className="btn btn-primary mt-3" onClick={handleSearch}>
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default HomePage;
