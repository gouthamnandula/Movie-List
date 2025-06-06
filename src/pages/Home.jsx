import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularmovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies...");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularmovies();
  }, []); //here [] these are dependency arrays

  const handleSearch = async(e) => {
    e.preventDefault(); //it prevent the entered value to vanish by default
    
    if(!searchQuery.trim()) return  //it prevents the code or return withour loading if there is spaces ot search is blank
    if(loading) return
    setLoading(true);
    try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
    }catch(err){
        setError("Failed to load movies");
        console.log(err);
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (
              movie //.map is used to dynamically rendering
            ) => (
              <MovieCard movie={movie} key={movie.id} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
