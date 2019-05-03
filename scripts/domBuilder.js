const entryLog = document.getElementById("entryLog");

function makeJournalEntryComponent(journalEntries) {
  journalEntries.forEach(eachEntry => {
    entryLog.innerHTML += `
    <h1>${eachEntry.date}</h1>
    <h2>${eachEntry.concept}</h2>
    <h3>${eachEntry.mood}</h3>
    <p>${eachEntry.entry}</p>
    `;
  });
}

makeJournalEntryComponent(journalEntries);