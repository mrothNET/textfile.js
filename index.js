"use strict";

const { readFile, readFileSync, writeFile, writeFileSync } = require("fs");

const utf8opts = { encoding: "utf8" };

const writeOpts = { flag: "w", ...utf8opts };
const appendOpts = { flag: "a", ...utf8opts };
const createOpts = { flag: "wx", ...utf8opts };

function readTextFileSync(path) {
  return readFileSync(path, utf8opts);
}

const writeTextFileSync = writeSync(writeOpts);
const appendTextFileSync = writeSync(appendOpts);
const createTextFileSync = writeSync(createOpts);

function writeSync(opts) {
  return (path, text, { mode } = {}) => {
    writeFileSync(path, text, { mode, ...opts });
  };
}

function readTextFile(path) {
  return new Promise((resolve, reject) => {
    readFile(path, utf8opts, (error, text) => {
      if (error) reject(error);
      else resolve(text);
    });
  });
}

const writeTextFile = write(writeOpts);
const appendTextFile = write(appendOpts);
const createTextFile = write(createOpts);

function write(opts) {
  return (path, text, { mode } = {}) => {
    return new Promise((resolve, reject) => {
      writeFile(path, text, { mode, ...opts }, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  };
}

function editTextFileSync(path, editor) {
  writeTextFileSync(path, editor(readTextFileSync(path)));
}

async function editTextFile(path, editor) {
  return writeTextFile(path, await editor(await readTextFile(path)));
}

module.exports = {
  readTextFileSync,
  writeTextFileSync,
  appendTextFileSync,
  createTextFileSync,
  editTextFileSync,

  readTextFile,
  writeTextFile,
  appendTextFile,
  createTextFile,
  editTextFile,
};
