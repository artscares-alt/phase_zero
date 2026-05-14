import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Categories.css';

function Categories({ onSelect }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [compounds, setCompounds] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/compounds/category/${category}`
      );
      setCompounds(response.data);
    } catch (error) {
      console.error('Error fetching compounds:', error);
    }
  };

  return (
    <div className="categories">
      <h2>Browse by Functional Group</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {compounds.length > 0 && (
        <div className="compounds-list">
          <h3>{selectedCategory} Compounds</h3>
          <div className="compound-items">
            {compounds.map(compound => (
              <div
                key={compound.id}
                className="compound-item"
                onClick={() => onSelect(compound)}
              >
                <h4>{compound.name}</h4>
                <p>{compound.formula}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
