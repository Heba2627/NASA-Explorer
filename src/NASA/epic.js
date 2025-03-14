import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./epic.css";
import { motion } from "framer-motion";

export default function Epic() {
    const [epic, setEpic] = useState([]);
    const [epicdate, setEpicdate] = useState(""); 
    const [selectedDate, setSelectedDate] = useState(""); 
    const apiKey = "f2n3uvEYzlfj8ufhvDs1yRfl2Hhrkadidxl5htWA";
    const navigate = useNavigate();

    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 4;

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = epic.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const fetchEPIC = () => {
        if (!selectedDate) return;

        setView(true);
        setLoading(true);
        setEpicdate(selectedDate);

        const fetchUrl = `https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=${apiKey}`;

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setEpic(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching EPIC data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        document.body.className = "body-epic";
        return () => {
            document.body.className = ""; 
        };
    }, []);

    return (
        <div>
            <motion.header
                className="header-epic"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="epic-title">Earth Polychromatic Imaging Camera</h1>
                <div className="epic-controls">
                    <input
                        type="date"
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)} 
                        className="epic-date-picker"
                    />
                    <button className="epic-button" onClick={fetchEPIC}>
                        Get Pictures
                    </button>
                    <button className="epic-button" onClick={() => navigate("/")}>
                        Return to Home
                    </button>
                </div>
            </motion.header>

            <div className="epic-container">
                {loading ? (
                    <h1 className="epic-no">Loading...</h1>
                ) : view && epic.length === 0 ? (
                    <h1 className="epic-no">No Photos Found</h1>
                ) : (
                    <div className="epic-grid">
                        {currentPhotos.map((photo) => {
                            const photoDate = epicdate.replaceAll("-", "/");

                            return (
                                <motion.div
                                    key={photo.id}
                                    className="epic-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <img
                                        src={`https://api.nasa.gov/EPIC/archive/natural/${photoDate}/png/${photo.image}.png?api_key=${apiKey}`}
                                        alt={`Earth Polychromatic Imaging Camera ${photo.caption}`}
                                        className="epic-image"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>

            {epic.length > 0 && (
                <div className="epic-pagination">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="epic-line">
                        Page {currentPage} of {Math.ceil(epic.length / photosPerPage)}
                    </span>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, Math.ceil(epic.length / photosPerPage))
                            )
                        }
                        disabled={indexOfLastPhoto >= epic.length}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
