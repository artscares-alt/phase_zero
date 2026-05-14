import React, { useState } from 'react';
import './Tutorial.css';

function Tutorial() {
  const [currentLesson, setCurrentLesson] = useState(0);

  const lessons = [
    {
      title: 'What is Organic Chemistry?',
      content: `
        Organic chemistry is the study of carbon-containing compounds. Here's why it's important:
        
        • Carbon can form 4 bonds with other atoms
        • This allows for millions of different compounds
        • Organic chemistry is found everywhere:
          - In living organisms (amino acids, proteins, DNA)
          - In medicines and drugs
          - In plastics and polymers
          - In fossil fuels (oil, coal, natural gas)
        
        Key facts:
        - Carbon atoms are special because they can bond to each other
        - This forms the "backbone" of organic molecules
        - Other atoms like hydrogen, oxygen, and nitrogen attach to this backbone
      `
    },
    {
      title: 'Alkanes (Single Bonds)',
      content: `
        Alkanes are the simplest organic compounds. They contain only carbon and hydrogen atoms connected by SINGLE bonds.
        
        General Formula: CₙH₂ₙ₊₂
        
        Examples:
        • Methane (CH₄) - natural gas
        • Ethane (C₂H₆)
        • Propane (C₃H₈) - gas for BBQs
        • Butane (C₄H₁₀) - lighter fuel
        
        Naming:
        - Number of carbons + -ane
        - Meth-ane (1 carbon)
        - Eth-ane (2 carbons)
        - Prop-ane (3 carbons)
        - But-ane (4 carbons)
        
        Properties:
        - Generally non-reactive (stable)
        - Insoluble in water
        - Used as fuels
      `
    },
    {
      title: 'Alkenes (Double Bonds)',
      content: `
        Alkenes contain at least one DOUBLE BOND (C=C) between carbon atoms.
        
        General Formula: CₙH₂ₙ
        
        Examples:
        • Ethene (C₂H₄) - used to ripen fruit
        • Propene (C₃H₆) - used to make plastic
        • But-2-ene (C₄H₈)
        
        Naming:
        - Number of carbons + position of double bond + -ene
        - Eth-ene (2 carbons, 1 double bond)
        - Prop-ene (3 carbons, 1 double bond)
        - But-2-ene (4 carbons, double bond at position 2)
        
        Properties:
        - More reactive than alkanes
        - The double bond can be broken to add other atoms
        - This is used in many industrial processes
        - Planar structure (flat) around the double bond
      `
    },
    {
      title: 'Alcohols (Hydroxyl Groups)',
      content: `
        Alcohols contain a hydroxyl group (-OH) attached to a carbon atom.
        
        General Formula: CₙH₂ₙ₊₂O or CₙH₂ₙ₊₁OH
        
        Examples:
        • Methanol (CH₃OH) - solvent
        • Ethanol (C₂H₅OH) - drinking alcohol
        • Propan-1-ol (C₃H₇OH) - disinfectant
        • Propan-2-ol (isopropanol) - rubbing alcohol
        
        Naming:
        - Number of carbons + position of OH + -ol
        - Meth-anol (1 carbon, OH)
        - Ethan-ol (2 carbons, OH)
        - Propan-1-ol (3 carbons, OH at position 1)
        - Propan-2-ol (3 carbons, OH at position 2)
        
        Properties:
        - Polar and often soluble in water
        - The OH group can form hydrogen bonds
        - Used as solvents, disinfectants, and fuels
      `
    },
    {
      title: 'Carbonyl Compounds (Aldehydes & Ketones)',
      content: `
        These compounds contain a C=O (carbonyl) group.
        
        There are two types:
        
        1) ALDEHYDES - Carbonyl at the END of chain (CHO)
        • Formula: CₙH₂ₙO
        • Naming: Prefix + -al
        • Ethanal (acetaldehyde) - CH₃CHO
        • Propanal - CH₃CH₂CHO
        
        2) KETONES - Carbonyl in the MIDDLE of chain (C=O)
        • Formula: CₙH₂ₙO
        • Naming: Prefix + position + -one
        • Propanone (acetone) - CH₃COCH₃
        • Butanone - CH₃COCH₂CH₃
        
        Properties:
        - Aldehydes are more reactive than ketones
        - Both are used as solvents
        - Propanone is the solvent in nail polish remover
        - Often have strong, distinctive smells
      `
    },
    {
      title: 'Carboxylic Acids (-COOH)',
      content: `
        Carboxylic acids contain a carboxyl group (-COOH) which is both a carbonyl AND a hydroxyl group.
        
        General Formula: CₙH₂ₙO₂ or CₙH₂ₙ₊₁COOH
        
        Examples:
        • Methanoic acid (formic acid) - HCOOH (found in ant venom)
        • Ethanoic acid (acetic acid) - CH₃COOH (in vinegar)
        • Propanoic acid - C₂H₅COOH (food preservative)
        
        Naming:
        - Number of carbons + -oic acid
        - Methan-oic acid (1 carbon)
        - Ethan-oic acid (2 carbons)
        - Propan-oic acid (3 carbons)
        
        Properties:
        - ACIDIC (can donate H⁺ ions)
        - Polar and often water-soluble
        - Used in food preservation
        - Strong smell (acetic acid = vinegar smell)
        - React with bases to form salts
      `
    },
    {
      title: 'Aromatic Compounds (Benzene Ring)',
      content: `
        Aromatic compounds contain a benzene ring - a special 6-carbon ring with alternating double bonds.
        
        Benzene: C₆H₆
        • The ring is very stable
        • Has special properties due to resonance
        • NOT reactive like alkenes, even though it has double bonds
        
        Examples:
        • Benzene (C₆H₆) - the simplest aromatic
        • Toluene (methylbenzene) - benzene + methyl group
        • Phenol - benzene + hydroxyl group
        • Aniline - benzene + amino group (NH₂)
        • Benzaldehyde - benzene + aldehyde group
        • Benzoic acid - benzene + carboxylic acid
        
        Properties:
        • Very stable (unreactive)
        • Planar structure
        • Often have distinctive smells (like almonds, toluene, phenol)
        • Used in many industrial processes
        • Often toxic or harmful
        
        Why are they called "aromatic"?
        - Historically, many aromatic compounds have strong smells
        - The name comes from "aroma" not the chemical structure
      `
    }
  ];

  const goToNext = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const goToPrevious = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const lesson = lessons[currentLesson];

  return (
    <div className="tutorial">
      <div className="lesson-header">
        <h2>📖 Organic Chemistry Tutorial</h2>
        <p>Lesson {currentLesson + 1} of {lessons.length}</p>
      </div>

      <div className="lesson-content">
        <h3>{lesson.title}</h3>
        <div className="lesson-text">
          {lesson.content.split('\n').map((line, idx) => {
            if (line.trim().startsWith('•')) {
              return (
                <li key={idx}>{line.replace('•', '').trim()}</li>
              );
            } else if (line.trim() === '') {
              return null;
            } else if (line.trim().match(/^[A-Z][^:]*:$/)) {
              return (
                <strong key={idx} className="section-header">{line.trim()}</strong>
              );
            } else {
              return (
                <p key={idx}>{line.trim()}</p>
              );
            }
          })}
        </div>
      </div>

      <div className="lesson-navigation">
        <button
          onClick={goToPrevious}
          disabled={currentLesson === 0}
          className="nav-btn"
        >
          ← Previous
        </button>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentLesson + 1) / lessons.length) * 100}%` }}
          ></div>
        </div>

        <button
          onClick={goToNext}
          disabled={currentLesson === lessons.length - 1}
          className="nav-btn"
        >
          Next →
        </button>
      </div>

      <div className="lesson-dots">
        {lessons.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentLesson ? 'active' : ''}`}
            onClick={() => setCurrentLesson(idx)}
            title={lessons[idx].title}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
