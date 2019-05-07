document.getElementById("submitButton").addEventListener("click", function() {
  
  const entryObj = {
    "date": document.querySelector("#journalDate").value,
    "title": document.querySelector("#ConceptsCovered").value,
    "entry": document.querySelector("#journalEntry").value,
    "mood": document.querySelector("#moodSelector").value
  };
  
  const makeNewEntry = tacoObj => {
    fetch("http://localhost:3000/journalEntries", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(tacoObj)
    })
      .then(response => response.json())
      .then(parsedResult => {
        console.log("updated journal", parsedResult);
      });
  };
  
  makeNewEntry(entryObj);

});
