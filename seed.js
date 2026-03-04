const pool = require("./db");

// ton JSON
const animes = [
  {
    "title": "Soul Eater",
    "episodes": 51,
    "year": 2008,
    "type": "TV",
    "genres": ["Action", "Comedy", "Fantasy"],
    "score": 7.85,
    "studio": "Bones"
  },
  {
    "title": "Hellsing",
    "episodes": 13,
    "year": 2001,
    "type": "TV",
    "genres": ["Action", "Horror", "Supernatural"],
    "score": 7.5,
    "studio": "Gonzo"
  },
  {
    "title": "Death Note",
    "episodes": 37,
    "year": 2006,
    "type": "TV",
    "genres": ["Supernatural", "Suspense"],
    "score": 8.62,
    "studio": "Madhouse"
  },
  {
    "title": "Fullmetal Alchemist: Brotherhood",
    "episodes": 64,
    "year": 2009,
    "type": "TV",
    "genres": ["Action", "Adventure", "Drama", "Fantasy"],
    "score": 9.11,
    "studio": "Bones"
  },
  {
    "title": "Magi",
    "episodes": 50,
    "year": 2012,
    "type": "TV",
    "genres": ["Action"],
    "score": 8.27,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Attack on Titan",
    "episodes": 94,
    "year": 2013,
    "type": "TV",
    "genres": ["Action", "Award Winning", "Drama", "Suspense"],
    "score": 8.57,
    "studio": "Wit Studio / MAPPA"
  },
  {
    "title": "The Future Diary",
    "episodes": 26,
    "year": 2012,
    "type": "TV",
    "genres": ["Action", "Supernatural", "Suspense"],
    "score": 7.38,
    "studio": "Asread"
  },
  {
    "title": "Blue Exorcist",
    "episodes": 49,
    "year": 2011,
    "type": "TV",
    "genres": ["Action", "Supernatural"],
    "score": 7.47,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Code Geass: Lelouch of the Rebellion",
    "episodes": 50,
    "year": 2006,
    "type": "TV",
    "genres": ["Award Winning", "Drama", "Sci-Fi"],
    "score": 8.71,
    "studio": "Sunrise"
  },
  {
    "title": "One Piece",
    "episodes": 1115,
    "year": 1999,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 8.73,
    "studio": "Toei Animation"
  },
  {
    "title": "Naruto",
    "episodes": 220,
    "year": 2002,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 8.02,
    "studio": "Pierrot"
  },
  {
    "title": "Gurren Lagann",
    "episodes": 27,
    "year": 2007,
    "type": "TV",
    "genres": ["Adventure", "Award Winning", "Sci-Fi"],
    "score": 8.64,
    "studio": "Gainax"
  },
  {
    "title": "Deadman Wonderland",
    "episodes": 12,
    "year": 2011,
    "type": "TV",
    "genres": ["Action", "Sci-Fi", "Supernatural", "Suspense"],
    "score": 7.13,
    "studio": "Manglobe"
  },
  {
    "title": "Log Horizon",
    "episodes": 62,
    "year": 2013,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 7.9,
    "studio": "Satelight"
  },
  {
    "title": "High School DxD",
    "episodes": 49,
    "year": 2012,
    "type": "TV",
    "genres": ["Action", "Comedy", "Romance", "Supernatural", "Ecchi"],
    "score": 7.31,
    "studio": "TNK"
  },
  {
    "title": "Fate/stay night",
    "episodes": 24,
    "year": 2006,
    "type": "TV",
    "genres": ["Action", "Fantasy", "Romance"],
    "score": 7.27,
    "studio": "Studio Deen"
  },
  {
    "title": "Fairy Tail",
    "episodes": 328,
    "year": 2009,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 7.57,
    "studio": "A-1 Pictures / Satelight"
  },
  {
    "title": "No Game No Life",
    "episodes": 12,
    "year": 2014,
    "type": "TV",
    "genres": ["Comedy", "Fantasy", "Ecchi"],
    "score": 8.04,
    "studio": "Madhouse"
  },
  {
    "title": "Sword Art Online",
    "episodes": 96,
    "year": 2012,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy", "Romance"],
    "score": 7.22,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Psycho-Pass",
    "episodes": 41,
    "year": 2012,
    "type": "TV",
    "genres": ["Action", "Mystery", "Sci-Fi", "Suspense"],
    "score": 8.33,
    "studio": "Production I.G"
  },
  {
    "title": "Akame ga Kill!",
    "episodes": 24,
    "year": 2014,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 7.48,
    "studio": "White Fox"
  },
  {
    "title": "Kill la Kill",
    "episodes": 24,
    "year": 2013,
    "type": "TV",
    "genres": ["Action", "Comedy", "Fantasy", "Ecchi"],
    "score": 8.03,
    "studio": "Trigger"
  },
  {
    "title": "Tokyo Ghoul",
    "episodes": 48,
    "year": 2014,
    "type": "TV",
    "genres": ["Action", "Fantasy", "Horror", "Suspense"],
    "score": 7.79,
    "studio": "Pierrot"
  },
  {
    "title": "Overlord",
    "episodes": 52,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 7.9,
    "studio": "Madhouse"
  },
  {
    "title": "Gangsta.",
    "episodes": 12,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Drama"],
    "score": 7.42,
    "studio": "Manglobe"
  },
  {
    "title": "Prison School",
    "episodes": 12,
    "year": 2015,
    "type": "TV",
    "genres": ["Comedy", "Ecchi"],
    "score": 7.58,
    "studio": "J.C.Staff"
  },
  {
    "title": "GATE",
    "episodes": 24,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 7.68,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Assassination Classroom",
    "episodes": 47,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Comedy"],
    "score": 8.07,
    "studio": "Lerche"
  },
  {
    "title": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
    "episodes": 59,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 7.53,
    "studio": "J.C.Staff"
  },
  {
    "title": "The Seven Deadly Sins",
    "episodes": 100,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy", "Ecchi"],
    "score": 7.6,
    "studio": "A-1 Pictures / Studio Deen"
  },
  {
    "title": "Death Parade",
    "episodes": 12,
    "year": 2015,
    "type": "TV",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "score": 8.13,
    "studio": "Madhouse"
  },
  {
    "title": "My Hero Academia",
    "episodes": 159,
    "year": 2016,
    "type": "TV",
    "genres": ["Action"],
    "score": 7.83,
    "studio": "Bones"
  },
  {
    "title": "Erased",
    "episodes": 12,
    "year": 2016,
    "type": "TV",
    "genres": ["Mystery", "Suspense"],
    "score": 8.3,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Konosuba: God's Blessing on This Wonderful World!",
    "episodes": 31,
    "year": 2016,
    "type": "TV",
    "genres": ["Adventure", "Comedy", "Fantasy"],
    "score": 8.09,
    "studio": "Studio Deen / Drive"
  },
  {
    "title": "Cowboy Bebop",
    "episodes": 26,
    "year": 1998,
    "type": "TV",
    "genres": ["Action", "Award Winning", "Sci-Fi"],
    "score": 8.75,
    "studio": "Sunrise"
  },
  {
    "title": "One Punch Man",
    "episodes": 24,
    "year": 2015,
    "type": "TV",
    "genres": ["Action", "Comedy"],
    "score": 8.48,
    "studio": "Madhouse / J.C.Staff"
  },
  {
    "title": "Violet Evergarden",
    "episodes": 13,
    "year": 2018,
    "type": "TV",
    "genres": ["Drama"],
    "score": 8.69,
    "studio": "Kyoto Animation"
  },
  {
    "title": "Devilman: Crybaby",
    "episodes": 10,
    "year": 2018,
    "type": "ONA",
    "genres": ["Action", "Avant Garde", "Horror", "Supernatural"],
    "score": 7.74,
    "studio": "Science SARU"
  },
  {
    "title": "Darling in the FranXX",
    "episodes": 24,
    "year": 2018,
    "type": "TV",
    "genres": ["Drama", "Romance", "Sci-Fi"],
    "score": 7.2,
    "studio": "A-1 Pictures / Trigger / CloverWorks"
  },
  {
    "title": "Made in Abyss",
    "episodes": 25,
    "year": 2017,
    "type": "TV",
    "genres": ["Adventure", "Drama", "Fantasy", "Mystery", "Sci-Fi"],
    "score": 8.63,
    "studio": "Kinema Citrus"
  },
  {
    "title": "Kakegurui: Compulsive Gambler",
    "episodes": 24,
    "year": 2017,
    "type": "TV",
    "genres": ["Drama", "Mystery", "Suspense"],
    "score": 7.21,
    "studio": "MAPPA"
  },
  {
    "title": "Classroom of the Elite",
    "episodes": 38,
    "year": 2017,
    "type": "TV",
    "genres": ["Drama", "Suspense"],
    "score": 7.83,
    "studio": "Lerche"
  },
  {
    "title": "The Saga of Tanya the Evil",
    "episodes": 12,
    "year": 2017,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 7.96,
    "studio": "NUT"
  },
  {
    "title": "Mob Psycho 100",
    "episodes": 37,
    "year": 2016,
    "type": "TV",
    "genres": ["Action", "Comedy", "Supernatural"],
    "score": 8.49,
    "studio": "Bones"
  },
  {
    "title": "Kabaneri of the Iron Fortress",
    "episodes": 12,
    "year": 2016,
    "type": "TV",
    "genres": ["Action", "Fantasy", "Horror", "Suspense"],
    "score": 7.28,
    "studio": "Wit Studio"
  },
  {
    "title": "Re:ZERO -Starting Life in Another World-",
    "episodes": 50,
    "year": 2016,
    "type": "TV",
    "genres": ["Drama", "Fantasy", "Suspense"],
    "score": 8.24,
    "studio": "White Fox"
  },
  {
    "title": "Frieren: Beyond Journey's End",
    "episodes": 28,
    "year": 2023,
    "type": "TV",
    "genres": ["Adventure", "Drama", "Fantasy"],
    "score": 9.28,
    "studio": "Madhouse"
  },
  {
    "title": "Fire Force",
    "episodes": 48,
    "year": 2019,
    "type": "TV",
    "genres": ["Action", "Fantasy", "Sci-Fi"],
    "score": 7.72,
    "studio": "David Production"
  },
  {
    "title": "Jujutsu Kaisen",
    "episodes": 47,
    "year": 2020,
    "type": "TV",
    "genres": ["Action", "Award Winning", "Supernatural"],
    "score": 8.51,
    "studio": "MAPPA"
  },
  {
    "title": "[Oshi No Ko]",
    "episodes": 24,
    "year": 2023,
    "type": "TV",
    "genres": ["Award Winning", "Drama"],
    "score": 8.54,
    "studio": "Doga Kobo"
  },
  {
    "title": "That Time I Got Reincarnated as a Slime",
    "episodes": 72,
    "year": 2018,
    "type": "TV",
    "genres": ["Action", "Comedy", "Fantasy"],
    "score": 8.13,
    "studio": "Eight Bit"
  },
  {
    "title": "Wistoria: Wand and Sword",
    "episodes": 12,
    "year": 2024,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 7.85,
    "studio": "Actas / Bandai Namco Pictures"
  },
  {
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "episodes": 63,
    "year": 2019,
    "type": "TV",
    "genres": ["Action", "Award Winning", "Supernatural"],
    "score": 8.41,
    "studio": "ufotable"
  },
  {
    "title": "Hunter x Hunter",
    "episodes": 148,
    "year": 2011,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 8.43,
    "studio": "Madhouse"
  },
  {
    "title": "Dragon Ball",
    "episodes": 153,
    "year": 1986,
    "type": "TV",
    "genres": ["Action", "Adventure", "Comedy", "Fantasy"],
    "score": 7.98,
    "studio": "Toei Animation"
  },
  {
    "title": "The Promised Neverland",
    "episodes": 23,
    "year": 2019,
    "type": "TV",
    "genres": ["Mystery", "Suspense"],
    "score": 8.47,
    "studio": "CloverWorks"
  },
  {
    "title": "Chainsaw Man",
    "episodes": 12,
    "year": 2022,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 8.43,
    "studio": "MAPPA"
  },
  {
    "title": "Haikyu!!",
    "episodes": 85,
    "year": 2014,
    "type": "TV",
    "genres": ["Sports"],
    "score": 8.43,
    "studio": "Production I.G"
  },
  {
    "title": "Black Clover",
    "episodes": 170,
    "year": 2017,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 8.14,
    "studio": "Pierrot"
  },
  {
    "title": "Dr. STONE",
    "episodes": 57,
    "year": 2019,
    "type": "TV",
    "genres": ["Adventure", "Comedy"],
    "score": 8.26,
    "studio": "TMS Entertainment"
  },
  {
    "title": "Vinland Saga",
    "episodes": 48,
    "year": 2019,
    "type": "TV",
    "genres": ["Action", "Adventure", "Drama"],
    "score": 8.78,
    "studio": "Wit Studio / MAPPA"
  },
  {
    "title": "Parasyte -the maxim-",
    "episodes": 24,
    "year": 2014,
    "type": "TV",
    "genres": ["Action", "Horror", "Sci-Fi", "Suspense"],
    "score": 8.32,
    "studio": "Madhouse"
  },
  {
    "title": "Bleach",
    "episodes": 366,
    "year": 2004,
    "type": "TV",
    "genres": ["Action", "Adventure", "Supernatural"],
    "score": 7.99,
    "studio": "Pierrot"
  },
  {
    "title": "Tokyo Revengers",
    "episodes": 50,
    "year": 2021,
    "type": "TV",
    "genres": ["Action", "Drama"],
    "score": 7.82,
    "studio": "LIDENFILMS"
  },
  {
    "title": "Mushoku Tensei: Jobless Reincarnation",
    "episodes": 48,
    "year": 2021,
    "type": "TV",
    "genres": ["Adventure", "Drama", "Fantasy", "Ecchi"],
    "score": 8.33,
    "studio": "Studio Bind"
  },
  {
    "title": "Bungo Stray Dogs",
    "episodes": 61,
    "year": 2016,
    "type": "TV",
    "genres": ["Action", "Mystery"],
    "score": 7.8,
    "studio": "Bones"
  },
  {
    "title": "Solo Leveling",
    "episodes": 12,
    "year": 2024,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 8.18,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Cyberpunk: Edgerunners",
    "episodes": 10,
    "year": 2022,
    "type": "ONA",
    "genres": ["Action", "Sci-Fi"],
    "score": 8.62,
    "studio": "Trigger"
  },
  {
    "title": "Dandadan",
    "episodes": 12,
    "year": 2024,
    "type": "TV",
    "genres": ["Action", "Comedy", "Supernatural"],
    "score": 8.43,
    "studio": "Science SARU"
  },
  {
    "title": "Tower of God",
    "episodes": 26,
    "year": 2020,
    "type": "TV",
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Mystery"],
    "score": 7.55,
    "studio": "Telecom Animation Film"
  },
  {
    "title": "The God of High School",
    "episodes": 13,
    "year": 2020,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 7.07,
    "studio": "MAPPA"
  },
  {
    "title": "The Eminence in Shadow",
    "episodes": 32,
    "year": 2022,
    "type": "TV",
    "genres": ["Action", "Comedy", "Fantasy"],
    "score": 8.22,
    "studio": "Nexus"
  },
  {
    "title": "Mashle: Magic and Muscles",
    "episodes": 24,
    "year": 2023,
    "type": "TV",
    "genres": ["Action", "Comedy", "Fantasy"],
    "score": 7.61,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Call of the Night",
    "episodes": 13,
    "year": 2022,
    "type": "TV",
    "genres": ["Romance", "Supernatural"],
    "score": 7.94,
    "studio": "LIDENFILMS"
  },
  {
    "title": "Food Wars!: Shokugeki no Soma",
    "episodes": 86,
    "year": 2015,
    "type": "TV",
    "genres": ["Gourmet", "Ecchi"],
    "score": 8.11,
    "studio": "J.C.Staff"
  },
  {
    "title": "Zom 100: Bucket List of the Dead",
    "episodes": 12,
    "year": 2023,
    "type": "TV",
    "genres": ["Comedy", "Suspense"],
    "score": 7.71,
    "studio": "BUG FILMS"
  },
  {
    "title": "Ranking of Kings",
    "episodes": 23,
    "year": 2021,
    "type": "TV",
    "genres": ["Adventure", "Fantasy"],
    "score": 8.48,
    "studio": "Wit Studio"
  },
  {
    "title": "The Case Study of Vanitas",
    "episodes": 24,
    "year": 2021,
    "type": "TV",
    "genres": ["Action", "Fantasy", "Mystery"],
    "score": 7.9,
    "studio": "Bones"
  },
  {
    "title": "Heavenly Delusion",
    "episodes": 13,
    "year": 2023,
    "type": "TV",
    "genres": ["Adventure", "Mystery", "Sci-Fi"],
    "score": 8.21,
    "studio": "Production I.G"
  },
  {
    "title": "Lycoris Recoil",
    "episodes": 13,
    "year": 2022,
    "type": "TV",
    "genres": ["Action"],
    "score": 8.14,
    "studio": "A-1 Pictures"
  },
  {
    "title": "Gachiakuta",
    "episodes": 0,
    "year": 2025,
    "type": "TV",
    "genres": ["Action", "Fantasy"],
    "score": 8.22,
    "studio": "Bones"
  },
  {
    "title": "Sakamoto Days",
    "episodes": 0,
    "year": 2025,
    "type": "TV",
    "genres": ["Action", "Comedy"],
    "score": 7.59,
    "studio": "TMS Entertainment"
  },
  {
    "title": "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    "episodes": 12,
    "year": 2021,
    "type": "TV",
    "genres": ["Action", "Drama", "Fantasy", "Mystery", "Romance"],
    "score": 7.31,
    "studio": "Silver Link. / Studio Palette"
  },
  {
    "title": "Wind Breaker",
    "episodes": 13,
    "year": 2024,
    "type": "TV",
    "genres": ["Action"],
    "score": 7.72,
    "studio": "CloverWorks"
  },
  {
    "title": "Inuyashiki: Last Hero",
    "episodes": 11,
    "year": 2017,
    "type": "TV",
    "genres": ["Action", "Drama", "Sci-Fi", "Suspense"],
    "score": 7.63,
    "studio": "MAPPA"
  },
  {
    "title": "Shangri-La Frontier",
    "episodes": 25,
    "year": 2023,
    "type": "TV",
    "genres": ["Action", "Adventure", "Fantasy"],
    "score": 8.1,
    "studio": "C2C"
  },
  {
    "title": "Tomodachi Game",
    "episodes": 12,
    "year": 2022,
    "type": "TV",
    "genres": ["Suspense"],
    "score": 7.7,
    "studio": "Okuruto Noboru"
  },
  {
    "title": "Tsukimichi -Moonlit Fantasy-",
    "episodes": 37,
    "year": 2021,
    "type": "TV",
    "genres": ["Action", "Adventure", "Comedy", "Fantasy"],
    "score": 7.71,
    "studio": "C2C / J.C.Staff"
  },
  {
    "title": "Baki",
    "episodes": 39,
    "year": 2018,
    "type": "ONA",
    "genres": ["Sports"],
    "score": 7.3,
    "studio": "TMS Entertainment"
  },
  {
    "title": "Kaiju No. 8",
    "episodes": 12,
    "year": 2024,
    "type": "TV",
    "genres": ["Action", "Fantasy", "Sci-Fi"],
    "score": 8.23,
    "studio": "Production I.G"
  },
  {
    "title": "Kemono Jihen",
    "episodes": 12,
    "year": 2021,
    "type": "TV",
    "genres": ["Action", "Mystery", "Supernatural"],
    "score": 7.36,
    "studio": "Ajia-do Animation Works"
  },
  {
    "title": "Record of Ragnarok",
    "episodes": 27,
    "year": 2021,
    "type": "ONA",
    "genres": ["Action", "Drama", "Fantasy"],
    "score": 6.83,
    "studio": "Graphinica / Yumeta Company"
  },
  {
    "title": "Undead Unluck",
    "episodes": 24,
    "year": 2023,
    "type": "TV",
    "genres": ["Action", "Comedy"],
    "score": 7.74,
    "studio": "David Production"
  },
  {
    "title": "SPY x FAMILY",
    "episodes": 37,
    "year": 2022,
    "type": "TV",
    "genres": ["Action", "Award Winning", "Comedy"],
    "score": 8.43,
    "studio": "Wit Studio / CloverWorks"
  },
  {
    "title": "Detective Conan",
    "episodes": 1130,
    "year": 1996,
    "type": "TV",
    "genres": ["Adventure", "Comedy", "Mystery"],
    "score": 8.18,
    "studio": "TMS Entertainment"
  }
];

async function seed() {
  try {
    // Vider la table
    await pool.query("TRUNCATE TABLE anime RESTART IDENTITY CASCADE");
    console.log("Table cleared!");

    for (let anime of animes) {
      const releaseDate = anime.year ? `${anime.year}-01-01` : null;

      await pool.query(
        `INSERT INTO anime (title, studio ,release_date, episodes, status, genres, rating, source_material)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          anime.title,
          anime.studio,
          releaseDate,
          anime.episodes,
          anime.type || null,
          anime.genres || null, // Assure-toi que genres est bien un text[] ou convertir en JSON
          anime.score || null,
          anime.type || null
        ]
      );

      console.log(`Inserting ${anime.title} with studio: ${anime.studio}`);
    }

    console.log("Seed finished!");
  } catch (err) {
    console.error("Error seeding DB:", err);
  } finally {
    await pool.end();
  }
}

seed();