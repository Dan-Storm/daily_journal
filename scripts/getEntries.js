function getJsonEntries() {
  fetch("http://localhost:3000/journalEntries")
    .then(function(response) {
      return response.json()
    })
    .then(function(parsedEntries) {
      parsedEntries.forEach(entry => {
        makeJournalEntryComponent(entry)
      });
    });
}

getJsonEntries();
