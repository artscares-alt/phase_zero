const express = require('express');
const cors = require('cors');
const compounds = require('./data/compounds');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Get all compounds (paginated)
app.get('/api/compounds/all', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = compounds.slice(start, end);
  res.json({
    total: compounds.length,
    page,
    limit,
    data: paginated
  });
});

// Search compounds by name or formula
app.get('/api/compounds/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  if (!query) return res.json([]);

  const results = compounds.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.formula.toLowerCase().includes(query) ||
    c.commonNames.some(name => name.toLowerCase().includes(query))
  );
  res.json(results);
});

// Get compound by IUPAC name
app.get('/api/compound/:name', (req, res) => {
  const compound = compounds.find(c => c.name.toLowerCase() === req.params.name.toLowerCase());
  if (!compound) return res.status(404).json({ error: 'Compound not found' });
  res.json(compound);
});

// Get compound by SMILES
app.get('/api/compound/smiles/:smiles', (req, res) => {
  const compound = compounds.find(c => c.smiles === req.params.smiles);
  if (!compound) return res.status(404).json({ error: 'Compound not found' });
  res.json(compound);
});

// Get compounds by category
app.get('/api/compounds/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const results = compounds.filter(c => c.category.toLowerCase() === category);
  res.json(results);
});

// Get all categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(compounds.map(c => c.category))];
  res.json(categories);
});

app.listen(PORT, () => {
  console.log(`\n🧪 Organic Chemistry API`);
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`\n📚 Available endpoints:`);
  console.log(`  GET /api/compounds/all - Get all compounds (paginated)`);
  console.log(`  GET /api/compounds/search?q=query - Search compounds`);
  console.log(`  GET /api/compound/:name - Get compound by name`);
  console.log(`  GET /api/compounds/category/:category - Get by category`);
  console.log(`  GET /api/categories - Get all categories\n`);
});
