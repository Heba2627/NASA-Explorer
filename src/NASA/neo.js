import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./neo.css";
import { motion } from "framer-motion";

export default function Neo() {

    const [neo, setNeo] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [id, setId] = useState("");
    const apiKey = "f2n3uvEYzlfj8ufhvDs1yRfl2Hhrkadidxl5htWA";
    const navigate = useNavigate();

    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 4;

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = neo.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const fetchNeoByDate = () => {

        setView(true);
        setLoading(true);

        let fetchUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                if (data.near_earth_objects) {
                    const neoArray = Object.values(data.near_earth_objects).flat();
                    setNeo(neoArray);
                } else {
                    setNeo([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Neo data:", error);
                setLoading(false);
            });
    };

    const fetchNeoById = () => {
        setView(true);
        setLoading(true);
    
        let fetchUrl = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`;
    
        fetch(fetchUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setNeo([data]);
                setLoading(false);
            })
            .catch(error => {
                setNeo([]);
                setLoading(false);
            });
    };
    const fetchNeoLatest = () => {

        setView(true);
        setLoading(true);

        let fetchUrl = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`;

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setNeo(data.near_earth_objects || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Neo data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        document.body.className = "body-neo";
        return () => {
            document.body.className = "";
        };
    }, []);

    return (
        <div>
            <motion.header
                className="header-neo"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="neo-title">Near Earth Objects</h1>
                <div className="neo-select-container">
                    <label className="neo-label">Get NEO by:</label>
                    <select
                        className="neo-select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="date">Time Interval</option>
                        <option value="id">Object ID</option>
                        <option value="latest">Latest NEO</option>
                    </select>
                    <div className="neo-home-container">
                        <button className="neo-button" onClick={() => navigate("/")}>
                            Home
                        </button>
                    </div>
                </div>

                <div className="neo-controls">
                    {selectedOption === "date" && (
                        <motion.div
                            className="neo-inputs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="neo-input"
                            />
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="neo-input"
                            />
                            <button onClick={fetchNeoByDate} className="neo-button">
                                Search
                            </button>
                        </motion.div>
                    )}
                    {selectedOption === "id" && (
                        <motion.div
                            className="neo-inputs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <input
                                type="text"
                                placeholder="Enter NEO ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="neo-input"
                            />
                            <button onClick={fetchNeoById} className="neo-button">
                                Search
                            </button>
                        </motion.div>
                    )}
                    {selectedOption === "latest" && (
                        <motion.div
                            className="neo-inputs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button onClick={fetchNeoLatest} className="neo-button">
                                Fetch Latest Discoveries
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.header>
            <div className="neo-container">
                {loading ? (
                    <h1 className="neo-no">Loading...</h1>
                ) : view && neo.length === 0 ? (
                    <h1 className="neo-no">No Objects Found</h1>
                ) : (
                    <div className="neo-grid">
                        {currentPhotos.map((photo) => {
                            return (
                                <motion.div
                                    key={photo.id}
                                    className="neo-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <h2 className="neo-name">{photo.name}</h2>
                                    <ul className="neo-details">
                                        <li className="neo-diameter">
                                            <strong>Estimated Diameter (Size):</strong> {photo.estimated_diameter.kilometers.estimated_diameter_min} - {photo.estimated_diameter.kilometers.estimated_diameter_max} km
                                        </li>
                                        <li className="neo-hazardous">
                                            <strong>Hazardous:</strong> {photo.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                                        </li>
                                        <li className="neo-approach">
                                            <strong>Close Approach Date:</strong> {photo.close_approach_data[0].close_approach_date_full}
                                        </li>
                                        <li className="neo-velocity">
                                            <strong>Relative Velocity:</strong> {photo.close_approach_data[0].relative_velocity.kilometers_per_second} km/s
                                        </li>
                                        <li className="neo-distance">
                                            <strong>Miss Distance:</strong> {photo.close_approach_data[0].miss_distance.kilometers} km
                                        </li>
                                        <li className="neo-orbiting">
                                            <strong>Orbiting Body:</strong> {photo.close_approach_data[0].orbiting_body}
                                        </li>
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
                {neo.length > photosPerPage && (
                    <div className="neo-pagination">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        <span className="neo-line">Page {currentPage} of {Math.ceil(neo.length / photosPerPage)}</span>

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(neo.length / photosPerPage)))}
                            disabled={indexOfLastPhoto >= neo.length}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

}