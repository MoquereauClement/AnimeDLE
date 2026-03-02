const pool = require("./db");

async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS anime (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) UNIQUE NOT NULL,
      release_date DATE,
      episodes INTEGER,
      status VARCHAR(50),
      demographic VARCHAR(50),
      genres TEXT[],
      studio VARCHAR(100),
      rating DECIMAL(3,1),
      source_material VARCHAR(50)
    );
  `);
}

initDB();