const animeOfTheDay = {
  title: "Naruto",
  genre: "Shonen",
  studio: "Pierrot",
  episodes: 220,
  year: 2002
};

const guessesContainer = document.getElementById('guesses-container');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const maxAttempts = 6;
let attempts = 0;

function createGuessRow(guess) {
  const row = document.createElement('div');
  row.classList.add('square-container');

  const fields = ["title","genre","studio","episodes","year"];
  fields.forEach(field => {
    const square = document.createElement('div');
    square.classList.add('square');

    if(guess[field].toString().toLowerCase() === animeOfTheDay[field].toString().toLowerCase()) {
      square.classList.add('correct');
    } else if (animeOfTheDay[field].toString().toLowerCase().includes(guess[field].toString().toLowerCase())) {
      square.classList.add('partial');
    } else {
      square.classList.add('wrong');
    }

    square.textContent = guess[field];
    row.appendChild(square);
  });

  guessesContainer.appendChild(row);
}

guessBtn.addEventListener('click', () => {
  const guessTitle = guessInput.value.trim();
  if(!guessTitle) return;

  // Ici on pourrait chercher les infos de l'anime deviné
  // Pour l'exemple, on simule avec une base simple
  const dummyDatabase = [
    {title: "Naruto", genre:"Shonen", studio:"Pierrot", episodes:220, year:2002},
    {title: "Bleach", genre:"Shonen", studio:"Pierrot", episodes:366, year:2004},
    {title: "One Piece", genre:"Shonen", studio:"Toei", episodes:1000, year:1999}
  ];

  const guess = dummyDatabase.find(a => a.title.toLowerCase() === guessTitle.toLowerCase()) || {
    title: guessTitle, genre:"?", studio:"?", episodes:"?", year:"?"
  };

  createGuessRow(guess);

  attempts++;
  guessInput.value = "";

  if(guess.title.toLowerCase() === animeOfTheDay.title.toLowerCase()) {
    message.textContent = `🎉 Tu as trouvé l'anime en ${attempts} essais !`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else if(attempts >= maxAttempts) {
    message.textContent = `❌ Game Over ! L'anime était ${animeOfTheDay.title}`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
  }
});