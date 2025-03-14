import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./mars.css";
import { motion } from "framer-motion";

export default function Marsrover() {
    const [mars, setMars] = useState([]);
    const [rovername, setRovername] = useState("curiosity");
    const [cameratype, setCameratype] = useState("");
    const [dateType, setDateType] = useState("earth_date");
    const [date, setDate] = useState("");
    const apiKey = "f2n3uvEYzlfj8ufhvDs1yRfl2Hhrkadidxl5htWA";
    const navigate = useNavigate();

    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 2;

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = mars.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const fetchMars = () => {

        setView(true);
        setLoading(true);

        let fetchUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rovername}/photos?api_key=${apiKey}`;

        if (date) {
            if (!isNaN(Number(date))) {
                fetchUrl += `&sol=${Number(date)}`;  // Sol date
            } else {
                fetchUrl += `&earth_date=${date}`;  // Earth date
            }
        }
        if (cameratype) {
            fetchUrl += `&camera=${cameratype}`;
        }

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setMars(data.photos || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Mars data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        document.body.className = "body-mars";
        return () => {
            document.body.className = ""; 
        };
    }, []);

    const cameraList = {
        curiosity: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
        opportunity: ["FHAZ", "RHAZ", "PANCAM", "MINITES", "NAVCAM"],
        spirit: ["FHAZ", "RHAZ", "PANCAM", "MINITES", "NAVCAM"],
    };
    const solLimits = {
        curiosity: getCuriositySol(),
        opportunity: 5111,
        spirit: 2208,
    };
    function getCuriositySol() {
        const landingDate = new Date("2012-08-06T00:00:00Z"); 
        const msPerSol = 1.027491 * 86400000; 
        return Math.floor((Date.now() - landingDate.getTime()) / msPerSol);
    }

    return (

        <div>
            <motion.header
                className="header-mars"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="mars-header-bg"></div>
                <h1 className="mars-title">Mars Rover Photos</h1>
            </motion.header>

            <div className="mars-container">
                <motion.div
                    className="mars-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="mars-content">
                        <div className="mars-up">
                            <div className="mars-controls">
                                <div className="mars-control-group">
                                    <label className="mars-label">Choose a Rover</label>
                                    <select value={rovername} onChange={(e) => setRovername(e.target.value)}
                                        className="mars-select">
                                        <option value="curiosity">Curiosity</option>
                                        <option value="opportunity">Opportunity</option>
                                        <option value="spirit">Spirit</option>
                                    </select>
                                </div>
                                <div className="mars-control-group">
                                    <label className="mars-label">Choose a Camera</label>
                                    <select value={cameratype} onChange={(e) => setCameratype(e.target.value)}
                                        className="mars-select">
                                        <option value="">All Cameras</option>
                                        {cameraList[rovername].map((camera) => (
                                            <option key={camera} value={camera}>{camera}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mars-control-group">
                                    <label className="mars-label">Choose Date Type</label>
                                    <select value={dateType} onChange={(e) => setDateType(e.target.value)}
                                        className="mars-select">
                                        <option value="earth_date">Earth Date</option>
                                        <option value="sol">Mars Sol</option>
                                    </select>
                                </div>
                                <div className="mars-control-group">
                                    <label className="mars-label">Select Date</label>
                                    {dateType === "earth_date" ? (
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="mars-date-picker"
                                        />
                                    ) : (
                                        <input
                                            type="number"
                                            min="0"
                                            max={solLimits[rovername]}
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="mars-date-picker"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="mars-buttons">
                                <div className="mars-control-group">
                                    <button onClick={fetchMars} className="mars-button">Get Images</button>
                                    <button onClick={() => navigate("/")} className="mars-button">Return to Home</button>
                                </div>
                            </div>
                        </div>
                        <div className="mars-down">
                            <div className="mars-photo-container">
                                {loading ? (
                                    <h1 className="mars-no">Loading...</h1>
                                ) : view && mars.length === 0 ? (
                                    <h1 className="mars-no">No Photos Found</h1>
                                ) : (
                                    currentPhotos.map((photo, index) => (
                                        <div
                                            key={photo.id}
                                            className={index % 2 === 0 ? "left-photo" : "right-photo"} >
                                            <img src={photo.img_src} alt={`Mars Rover ${photo.camera.name}`}/>
                                        </div>
                                    ))
                                )}
                            </div>
                            {mars.length > photosPerPage && (
                                <div className="mars-pagination">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>

                                    <span>Page {currentPage} of {Math.ceil(mars.length / photosPerPage)}</span>

                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(mars.length / photosPerPage)))}
                                        disabled={indexOfLastPhoto >= mars.length}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>


        </div>
    );
}