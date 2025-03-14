import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./search.css";
export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query"); // mn el url 
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 2;
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = results.slice(indexOfFirstPhoto, indexOfLastPhoto);

    useEffect(() => {
        const fetchData = async () => {
            if (!query) return;

            setLoading(true);
            setError(null);

            try {
                const res = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
                const data = await res.json();
                setResults(data.collection.items || []);
            } catch (err) {
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    useEffect(() => {
        document.body.className = "body-search";
        return () => {
            document.body.className = "";
        };
    }, []);

    return (
        <div>
            <motion.header className="search-header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="search-header-content">
                    <h2 className="search-title">Search Results for "{query}"</h2>
                    <button className="search1-button" onClick={() => navigate("/")}>
                        Return Home
                    </button>
                </div>
            </motion.header>
            <div className="search1-container">
                {loading && <p className="search-no">Loading...</p>}
                {error && <p className="search-no">{error}</p>}
                <div className="search-grid">
                    {results.length > 0 ? (
                        currentPhotos.map((item, index) => (
                            <div key={index} className="search-card">
                                <p className="search-name">{item.data?.[0]?.title || "No title available"}</p>
                                <img
                                    src={item.links?.[0]?.href || "https://via.placeholder.com/150"}
                                    alt={item.data?.[0]?.title || "No title available"}
                                    className="search-image"
                                />
                            </div>
                        ))
                    ) : (
                        !loading && <p className="Search-no">No results found.</p>
                    )}
                </div>
            </div>

            {results.length > 0 && (
                <div className="search-pagination">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="search-line">
                        Page {currentPage} of {Math.ceil(results.length / photosPerPage)}
                    </span>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, Math.ceil(results.length / photosPerPage))
                            )
                        }
                        disabled={currentPage === Math.ceil(results.length / photosPerPage)}
                    >
                        Next
                    </button>
                </div>
            )}

        </div>
    );
}