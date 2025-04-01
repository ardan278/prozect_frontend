import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "../assets/styles/SearchBar.css";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Fetch search results with debounce
  const fetchResults = async (searchTerm: string) => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }
    try {
      const response = await axios.get<string[]>(
        `https://bright-ewe-inherently.ngrok-free.appapi/search?q=${searchTerm}`
      );
      console.log("Response Data:", response.data);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    fetchResults(value);
    setSelectedIndex(-1); // Reset selection when typing
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && selectedIndex < results.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setQuery(results[selectedIndex]); // Set input to selected result
      setResults([]); // Hide dropdown after selection
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="search-input"
          placeholder="Search..."
        />
        {/* Display Auto-Complete Suggestion */}
        {results.length > 0 && (
          <div className="autocomplete">
            {results.map((item, index) => (
              <div
                key={index}
                className={`autocomplete-item ${
                  index === selectedIndex ? "selected" : ""
                }`}
                onMouseDown={() => setQuery(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        <FaSearch className="search-icon" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;
