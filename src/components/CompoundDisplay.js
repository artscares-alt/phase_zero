import React from 'react';
import './CompoundDisplay.css';

function CompoundDisplay({ compound }) {
  if (!compound) return null;

  return (
    <div className="compound-display">
      <div className="compound-header">
        <h2>{compound.name}</h2>
        <span className="category-badge">{compound.category}</span>
      </div>

      <div className="compound-grid">
        <div className="info-card">
          <h3>Molecular Formula</h3>
          <p className="formula">{compound.formula}</p>
        </div>

        <div className="info-card">
          <h3>SMILES Notation</h3>
          <p className="smiles">{compound.smiles}</p>
        </div>

        <div className="info-card">
          <h3>Molar Mass</h3>
          <p>{compound.molarMass} g/mol</p>
        </div>

        <div className="info-card">
          <h3>Common Names</h3>
          <ul>
            {compound.commonNames.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="compound-full">
        <div className="description-card">
          <h3>Description</h3>
          <p>{compound.description}</p>
        </div>

        <div className="naming-card">
          <h3>How to Name It</h3>
          <p>{compound.nameBreakdown}</p>
        </div>
      </div>
    </div>
  );
}

export default CompoundDisplay;
