const fs = require('fs');
const chalk = require('chalk');

const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    }
    catch (err) {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = fetchNotes();

    const note = {
        title,
        body
    };

    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);

        fs.writeFileSync("notes.json", JSON.stringify(notes));

        console.log(chalk.green.inverse("New Node created!"));
    }
    else {
        console.log(chalk.red.inverse("Title already taken!"));
    }
}

const removeNote = (title) => {
    const notes = fetchNotes();

    const filteredNotes = notes.filter((note) => note.title !== title);


    if (notes.length > filteredNotes.length) {
        console.log(chalk.green.inverse("Note removed!"));
        fs.writeFileSync("notes.json", JSON.stringify(filteredNotes));
    }
    else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

const readNote = (title) => {
    const notes = fetchNotes();

    const filteredNote = notes.find((note) => note.title === title);

    if (filteredNote) {
        console.log(chalk.blue(filteredNote.title) + " \n " + chalk.yellow(filteredNote.body));
    }
    else {
        console.log(chalk.red.inverse("Note Not Found!"));
    }
}

const listNotes = () => {
    const notes = fetchNotes();

    console.log(chalk.blue.inverse(" Your Notes : "));

    notes.forEach((note) => {
        console.log("Title : " + chalk.magenta(note.title) + " Body : " + chalk.cyan(note.body));
    });
}


module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}