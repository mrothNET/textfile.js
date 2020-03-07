"use strict";

const { readFile, readFileSync, writeFile, writeFileSync } = require("fs");

const utf8opts = { encoding: "utf8" };

const writeOpts = { flag: "w", ...utf8opts };
const appendOpts = { flag: "a", ...utf8opts };
const createOpts = { flag: "wx", ...utf8opts };

function readTextFileSync(path) {
  return readFileSync(path, utf8opts);
}

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

function write(opts) {
  return (path, text, { mode } = {}) => {
    return new Promise((resolve, reject) => {
      writeFile(path, text, { mode, ...opts }, error => {
        if (error) reject(error);
        else resolve();
      });
    });
  };
}

module.exports = {
  readTextFileSync,

  writeTextFileSync: writeSync(writeOpts),
  appendTextFileSync: writeSync(appendOpts),
  createTextFileSync: writeSync(createOpts),

  readTextFile,

  writeTextFile: write(writeOpts),
  appendTextFile: write(appendOpts),
  createTextFile: write(createOpts)
};
