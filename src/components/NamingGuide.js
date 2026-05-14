import React from 'react';
import './NamingGuide.css';

function NamingGuide() {
  return (
    <div className="naming-guide">
      <h2>IUPAC Nomenclature Guide</h2>

      <section className="guide-section">
        <h3>📌 Basic Naming Rules</h3>
        <div className="rule-card">
          <h4>1. Identify the Main Chain</h4>
          <p>Find the longest continuous carbon chain. This determines the parent name.</p>
          <example>C-C-C-C = Butane (4 carbons)</example>
        </div>

        <div className="rule-card">
          <h4>2. Number the Chain</h4>
          <p>Number carbons from the end that gives the functional group the lowest number.</p>
          <example>If OH is at carbon 2, number from that end</example>
        </div>

        <div className="rule-card">
          <h4>3. Identify Substituents</h4>
          <p>List any groups attached to the main chain (like methyl, ethyl, bromo).</p>
          <example>CH₃ attached = methyl substituent</example>
        </div>
      </section>

      <section className="guide-section">
        <h3>🔗 Carbon Chain Prefixes</h3>
        <div className="table-container">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Number of Carbons</th>
                <th>Prefix</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Meth-</td>
                <td>Methane (CH₄)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Eth-</td>
                <td>Ethane (C₂H₆)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Prop-</td>
                <td>Propane (C₃H₈)</td>
              </tr>
              <tr>
                <td>4</td>
                <td>But-</td>
                <td>Butane (C₄H₁₀)</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Pent-</td>
                <td>Pentane (C₅H₁₂)</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Hex-</td>
                <td>Hexane (C₆H₁₄)</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Hept-</td>
                <td>Heptane (C₇H₁₆)</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Oct-</td>
                <td>Octane (C₈H₁₈)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>⚛️ Functional Group Suffixes</h3>
        <div className="table-container">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Functional Group</th>
                <th>Suffix</th>
                <th>Example</th>
                <th>Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single bonds only</td>
                <td>-ane</td>
                <td>Ethane</td>
                <td>C-C</td>
              </tr>
              <tr>
                <td>Double bond</td>
                <td>-ene</td>
                <td>Ethene</td>
                <td>C=C</td>
              </tr>
              <tr>
                <td>Triple bond</td>
                <td>-yne</td>
                <td>Ethyne</td>
                <td>C≡C</td>
              </tr>
              <tr>
                <td>Alcohol (OH group)</td>
                <td>-ol</td>
                <td>Ethanol</td>
                <td>-OH</td>
              </tr>
              <tr>
                <td>Aldehyde (CHO)</td>
                <td>-al</td>
                <td>Ethanal</td>
                <td>-CHO</td>
              </tr>
              <tr>
                <td>Ketone (C=O)</td>
                <td>-one</td>
                <td>Propanone</td>
                <td>-C(=O)-</td>
              </tr>
              <tr>
                <td>Carboxylic acid</td>
                <td>-oic acid</td>
                <td>Ethanoic acid</td>
                <td>-COOH</td>
              </tr>
              <tr>
                <td>Amine (NH₂)</td>
                <td>-amine</td>
                <td>Methanamine</td>
                <td>-NH₂</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>🏷️ Examples of Naming</h3>
        <div className="example-card">
          <h4>Example 1: Propane</h4>
          <p><strong>Structure:</strong> C-C-C</p>
          <p><strong>Breaking it down:</strong> Prop- (3 carbons) + -ane (single bonds)</p>
          <p><strong>Name:</strong> Propane</p>
        </div>

        <div className="example-card">
          <h4>Example 2: Ethanol</h4>
          <p><strong>Structure:</strong> C-C-OH</p>
          <p><strong>Breaking it down:</strong> Eth- (2 carbons) + -ol (hydroxyl group)</p>
          <p><strong>Name:</strong> Ethanol</p>
        </div>

        <div className="example-card">
          <h4>Example 3: Propan-2-ol</h4>
          <p><strong>Structure:</strong> C-C(OH)-C (OH is on carbon 2)</p>
          <p><strong>Breaking it down:</strong> Prop- (3 carbons) + -an-2-ol (OH at position 2)</p>
          <p><strong>Name:</strong> Propan-2-ol (or Isopropanol)</p>
        </div>

        <div className="example-card">
          <h4>Example 4: But-2-ene</h4>
          <p><strong>Structure:</strong> C-C=C-C (double bond between C2 and C3)</p>
          <p><strong>Breaking it down:</strong> But- (4 carbons) + -2-ene (double bond at position 2)</p>
          <p><strong>Name:</strong> But-2-ene</p>
        </div>
      </section>

      <section className="guide-section">
        <h3>✅ Naming Checklist</h3>
        <div className="checklist">
          <label><input type="checkbox" /> Find the longest carbon chain</label>
          <label><input type="checkbox" /> Count carbons (1 carbon = meth, 2 = eth, 3 = prop, etc.)</label>
          <label><input type="checkbox" /> Identify the functional group (bonds, OH, CHO, etc.)</label>
          <label><input type="checkbox" /> Choose the correct suffix (-ane, -ol, -one, -al, -oic acid)</label>
          <label><input type="checkbox" /> Number the chain to give functional groups lowest numbers</label>
          <label><input type="checkbox" /> Add numbers before functional groups and substituents</label>
          <label><input type="checkbox" /> Put it all together!</label>
        </div>
      </section>
    </div>
  );
}

export default NamingGuide;
