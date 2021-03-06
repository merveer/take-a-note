console.log('Starting app');

const fs = require('fs'); // fetch all contents of fs module and store them in fs var // we can access all functions of fs
const _ = require('lodash');
const yargs = require('yargs'); // parsing arguments

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0]; // grab command line info
console.log('Command;', command);
console.log('Yargs;', argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created --');
    notes.logNote(note);
  } else {
    console.log('Please Change The Title-Duplicate Title')
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else if (command === 'read') {
  let note = notes.readNote(argv.title, argv.body);
  if (note) {
    console.log('Note found --');
    notes.logNote(note);
  } else {
    console.log('Note not found')
  }

} else {
  console.log('Command not recognized');
}
