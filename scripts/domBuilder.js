const entryLog = document.getElementById("entryLog");

function makeJournalEntryComponent(taco) {
//   console.log(taco);
    entryLog.innerHTML += `
    <h1>${taco.date}</h1>
    <h2>${taco.concept}</h2>
    <h3>${taco.mood}</h3>
    <p>${taco.entry}</p>
    <hr>
    `;
  }
