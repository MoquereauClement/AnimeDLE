const guessesContainer = document.getElementById('guesses-container');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const maxAttempts = 6;
let attempts = 0;

let animeOfTheDay = null;

async function initGame() {
    try {
        // On récupère Naruto (ou un autre) directement via ton API
        const res = await fetch(`/api/anime?title=Naruto`); 
        animeOfTheDay = await res.json();
        console.log("L'anime à deviner est prêt :", animeOfTheDay);
    } catch (err) {
        console.error("Impossible de charger l'anime du jour", err);
    }
}

// Appelle la fonction au chargement
initGame();

function createGuessRow(guess) {
    const row = document.createElement('div');
    row.classList.add('square-container');

    const fields = ["title", "genre", "studio", "episodes", "year"];
    
    fields.forEach(field => {
        const square = document.createElement('div');
        square.classList.add('square');

        const guessVal = guess[field] ?? "?";
        const targetVal = animeOfTheDay[field] ?? "?";

        const sGuess = guessVal.toString().toLowerCase().trim();
        const sTarget = targetVal.toString().toLowerCase().trim();

        let status = 'wrong';
        let arrow = '';

        // 1. LOGIQUE NUMÉRIQUE (Episodes & Année)
        if (field === "episodes" || field === "year") {
            const nGuess = parseInt(guessVal);
            const nTarget = parseInt(targetVal);

            if (nGuess === nTarget) {
                status = 'correct';
            } else {
                status = 'wrong';
                arrow = nGuess < nTarget ? " ↑" : " ↓";
            }
        } 
        // 2. LOGIQUE DES GENRES (Correction ici)
        else if (field === "genre") {
            // On découpe par virgule et on nettoie chaque élément
            const guessArray = sGuess.split(',').map(g => g.trim()).filter(g => g !== "");
            const targetArray = sTarget.split(',').map(g => g.trim()).filter(g => g !== "");

            // Vérification si tous les genres correspondent (VERT)
            const isPerfectMatch = guessArray.length === targetArray.length && 
                                 guessArray.every(g => targetArray.includes(g));

            if (isPerfectMatch) {
                status = 'correct';
            } 
            // Vérification si AU MOINS UN genre est commun (JAUNE)
            else if (guessArray.some(g => targetArray.includes(g))) {
                status = 'partial';
            }
        }
        // 3. LOGIQUE TEXTUELLE (Titre & Studio)
        else {
            if (sGuess === sTarget) {
                status = 'correct';
            } else if (sTarget.includes(sGuess) || sGuess.includes(sTarget)) {
                status = 'partial';
            }
        }

        square.classList.add(status);
        square.textContent = guessVal + arrow;
        row.appendChild(square);
    });

    guessesContainer.appendChild(row);
}

guessBtn.addEventListener('click', async () => {
  const guessTitle = guessInput.value.trim();
  if(!guessTitle) return;

  try {
    const res = await fetch(`/api/anime?title=${encodeURIComponent(guessTitle)}`);
    const data = await res.ok ? await res.json() : null;

    const guess = data || { title: guessTitle, genre:"?", studio:"?", episodes:"?", year:"?" };
    createGuessRow(guess);

    attempts++;
    guessInput.value = "";

    if(guess.title.toLowerCase() === animeOfTheDay.title.toLowerCase()) {
      message.textContent = `Tu as trouvé l'anime en ${attempts} essais !`;
      guessBtn.disabled = true;
      guessInput.disabled = true;
    } else if(attempts >= maxAttempts) {
      message.textContent = `Game Over ! L'anime était ${animeOfTheDay.title}`;
      guessBtn.disabled = true;
      guessInput.disabled = true;
    }
  } catch(err) {
    console.error(err);
    message.textContent = "Erreur serveur.";
  }
});


const suggestions = document.getElementById('suggestions');

guessInput.addEventListener('input', async () => {
    const text = guessInput.value.trim();
    
    if (text.length < 2) { // On cherche à partir de 2 lettres
        suggestions.style.display = 'none';
        return;
    }

    try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(text)}`);
        const list = await res.json();

        if (list.length > 0) {
            suggestions.innerHTML = '';
            list.forEach(title => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = title;
                
                // Quand on clique sur une suggestion
                div.addEventListener('click', () => {
                    guessInput.value = title;
                    suggestions.style.display = 'none';
                });
                
                suggestions.appendChild(div);
            });
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    } catch (err) {
        console.error("Erreur suggestions", err);
    }
});

// Fermer la liste si on clique ailleurs sur la page
document.addEventListener('click', (e) => {
    if (e.target !== guessInput) {
        suggestions.style.display = 'none';
    }
});