import React from "react";
import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";
import "./HomeStyling.css";
import { FaSearch } from "react-icons/fa";
import ap from "../NASA/ap.jpg"
import { FaRocket, FaStar, FaCameraRetro, FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Home() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/apod');
  }

  const hanldeClick1 = () => {
    navigate('/marsrover');
  }

  const handleClick2 = () => {
    navigate('/epic');
  }

  const handleClick3 = () => {
    navigate('/neo');
  }

  //For el search 
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);// trim w encodeURIComponent bey insure el querey is valid
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-bg1"></div>
        <div className="header-content">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="logo"
          >
            <Rocket className="logo-icon" />
            <h1 className="Nasa">NASA API Explorer</h1>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
              alt="NASA Logo"
              className="nasa-logo"
            />
          </motion.div>



          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ul className="nav-list " >
              <div style={{ marginLeft: "20px" }}>
                <motion.li whileHover={{ scale: 1.1 }} className="nav-item"
                  onClick={handleClick}>
                  Astronomy Picture of the Day
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="nav-item"
                  onClick={hanldeClick1}>
                  Mars Rover Photos
                </motion.li>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <motion.li whileHover={{ scale: 1.1 }} className="nav-item"
                  onClick={handleClick2}>
                  Earth Polychromatic Imaging Camera
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="nav-item"
                  onClick={handleClick3}>
                  Near Earth Objects
                </motion.li>
              </div>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                  <FaSearch className="search-icon" />
                </button>
              </div>
            </ul>
          </motion.nav>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Star className="star-icon" />
          </motion.div>
        </div>
      </header>


      <div className="container">
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="overlay-content">
            <div className="left-section">
              <img
                src={ap}
                className="astronaut-image"
                alt="Astronaut"
              />
              <p className="quote">“It is a very sobering feeling to be up in space and realize that one's safety factor was determined by the lowest bidder on a government contract.”
                ― Alan Shepard
              </p>
            </div>

            <div className="about-us">
              <h1 className="about-title">About Us</h1>
              <p className="about-description">
                NASA API Explorer lets you dive into space discoveries explore deep space.
              </p>

              <div className="info-container">
                <div className="info-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaStar className="icon" />
                  <h2 className="HS">APOD</h2>
                  <p className="ps">Daily breathtaking space images explained by NASA.</p>
                </div>

                <div className="info-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <FaRocket className="icon" />
                  <h2 className="HS">Mars Rovers</h2>
                  <p className="ps">Explore Mars through real images captured by NASA rovers.</p>
                </div>

                <div className="info-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <FaCameraRetro className="icon" />
                  <h2 className="HS">EPIC</h2>
                  <p className="ps">View real-time images of Earth from space.</p>
                </div>

                <div className="info-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <FaGlobe className="icon" />
                  <h2 className="HS">Near-Earth Objects</h2>
                  <p className="ps">Track asteroids & comets passing close to Earth.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
}
