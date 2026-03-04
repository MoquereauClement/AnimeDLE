const express = require("express");
const pool = require("./db"); // connexion Postgres
const path = require("path"); // <-- ajouter path
const app = express();
const PORT = 3000;

// Middleware pour parser JSON côté client
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Fonction pour initialiser la DB
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS anime (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) UNIQUE NOT NULL,
      studio VARCHAR(255),
      release_date DATE,
      episodes INTEGER,
      status VARCHAR(50),
      genres TEXT[],
      rating DECIMAL(3,1),
      source_material VARCHAR(50)
    );
  `);
}

// Route test pour index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // <-- utiliser sendFile
});

// Exemple : récupérer un anime par titre
app.get("/api/anime", async (req, res) => {
  const { title } = req.query;
  try {
    const result = await pool.query(
      `SELECT 
        title, 
        array_to_string(genres, ', ') AS genre, -- Transforme le tableau en "Action, Adventure..."
        studio, 
        episodes, 
        EXTRACT(YEAR FROM release_date) AS year 
      FROM anime WHERE LOWER(title) = LOWER($1)`,
      [title]
    );

    if (result.rows.length === 0) return res.status(404).json({ error: "Anime non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Initialisation DB puis démarrage du serveur
initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Erreur init DB :", err);
  });


  app.get("/api/search", async (req, res) => {
  const { q } = req.query;
  try {
    const result = await pool.query(
      "SELECT title FROM anime WHERE title ILIKE $1 LIMIT 10",
      [`%${q}%`] // Le % permet de chercher n'importe où dans le titre
    );
    res.json(result.rows.map(row => row.title));
  } catch (err) {
    res.status(500).json({ error: "Erreur recherche" });
  }
});