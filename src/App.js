import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CompoundDisplay from './components/CompoundDisplay';
import Categories from './components/Categories';
import NamingGuide from './components/NamingGuide';
import Tutorial from './components/Tutorial';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('search');
  const [selectedCompound, setSelectedCompound] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🧪 Organic Chemistry App</h1>
          <p>Learn IUPAC nomenclature and molecular structures</p>
        </div>
      </header>

      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          🔍 Search
        </button>
        <button
          className={`tab ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          📚 Categories
        </button>
        <button
          className={`tab ${activeTab === 'naming' ? 'active' : ''}`}
          onClick={() => setActiveTab('naming')}
        >
          📝 Naming Guide
        </button>
        <button
          className={`tab ${activeTab === 'tutorial' ? 'active' : ''}`}
          onClick={() => setActiveTab('tutorial')}
        >
          📖 Tutorial
        </button>
      </nav>

      <main className="content">
        {activeTab === 'search' && (
          <div className="tab-content">
            <SearchBar onResults={setSearchResults} onSelect={setSelectedCompound} />
            {searchResults.length > 0 && (
              <div className="results">
                {searchResults.map(compound => (
                  <div
                    key={compound.id}
                    className="result-item"
                    onClick={() => setSelectedCompound(compound)}
                  >
                    <h3>{compound.name}</h3>
                    <p>{compound.formula}</p>
                  </div>
                ))}
              </div>
            )}
            {selectedCompound && <CompoundDisplay compound={selectedCompound} />}
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="tab-content">
            <Categories onSelect={setSelectedCompound} />
            {selectedCompound && <CompoundDisplay compound={selectedCompound} />}
          </div>
        )}

        {activeTab === 'naming' && (
          <div className="tab-content">
            <NamingGuide />
          </div>
        )}

        {activeTab === 'tutorial' && (
          <div className="tab-content">
            <Tutorial />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
