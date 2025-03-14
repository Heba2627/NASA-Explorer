import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./apod.css";
import { motion } from "framer-motion";

export default function Apod() {
    const [apod, setApod] = useState([]);
    const [date, setDate] = useState("");
    const apiKey = "f2n3uvEYzlfj8ufhvDs1yRfl2Hhrkadidxl5htWA";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const navigate = useNavigate();

    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchAPOD = (selectedDate = "") => {
        let fetchUrl = url;
        setView(true);
        setLoading(true);

        if (selectedDate) fetchUrl += `&date=${selectedDate}`;
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => 
                {setApod(data)
                setLoading(false);
                })
            .catch(error => {console.log(error)
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchAPOD();
    }, []);

    return (
        <div>
            <motion.header
                className="header-apod"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >    <div className="header-bg"></div>
                <h1 className="title">Astronomy Picture Of The Day</h1>
                <div className="controls">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="date-picker"
                    />
                    <button className="apod-button" onClick={() => fetchAPOD(date)}>
                        Get Picture
                    </button>
                    <button className="apod-button" onClick={() => navigate("/")}>
                        Home
                    </button>
                </div>
            </motion.header>

            <div className="apod-container">
                <motion.div
                    className="apod-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="apod-content">
                        <div className="apod-left">
                            {loading ? (
                                <h1 className="apod-no">Loading...</h1>
                            ) : view && (!apod || apod.code) ? (
                                <h1 className="apod-no">No Photos Found</h1>
                            ) :
                            (
                                <div>
                            <img src={apod.url} alt={apod.title} className="apod-image" />
                            <h1 className="apod-title">{apod.title}</h1>
                            <p className="apod-date">{apod.date}</p>
                            </div>
                            )} 
                        </div>
                        <div className="apod-right">
                            <p className="apod-description">{apod.explanation}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

