// let db;

// const request = indexedDB.open("workout", 1);

// request.onupgradeneeded = function(event) {
//     const db = event.target.result;
//     db.createObjectStore ("?", ?)
// }

// request.onsuccess = function(event) {
//     db = event.target.result;
  
//     // check if app is online before reading from db
//     if (navigator.onLine) {
//       checkDatabase();
//     }
//   };
// request.onerror = function(event) {
//     console.log("Woops! " + event.target.errorCode);
//   };

// function saveRecord(record) {
//     // create a transaction on the pending db with readwrite access
//     const transaction = db.transaction(["pending"], "readwrite");