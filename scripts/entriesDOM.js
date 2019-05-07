const entryLog = document.getElementById("entryLog");

const journalMaker = {
  makeJournalEntryComponent(taco) {
    entryLog.innerHTML += `
    <h1>${taco.date}</h1>
    <h2>${taco.title}</h2>
    <h3>${taco.mood}</h3>
    <p>${taco.entry}</p>
    <hr>
    `;
  }
};
