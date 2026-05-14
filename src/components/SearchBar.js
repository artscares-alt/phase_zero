import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

function SearchBar({ onResults, onSelect }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/compounds/search', {
        params: { q: query }
      });
      onResults(response.data);
    } catch (error) {
      console.error('Search error:', error);
      onResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name (e.g., ethanol) or formula (e.g., C₂H₆O)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
