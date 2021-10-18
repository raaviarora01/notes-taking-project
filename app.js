console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
    notes.addNote(title, body);
}
else if (command === "remove") {
    notes.removeNote(title);
}
else if (command === "read") {
    notes.readNote(title);
}
else if (command === "list") {
    notes.listNotes();
}
else {
    console.log("Unknown command!!!");
}