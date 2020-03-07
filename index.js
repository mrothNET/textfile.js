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
  return (path, data, { mode } = {}) => {
    writeFileSync(path, data, { mode, ...opts });
  };
}

function readTextFile(path) {
  return new Promise((resolve, reject) => {
    readFile(path, utf8opts, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

function write(opts) {
  return (path, data, { mode } = {}) => {
    return new Promise((resolve, reject) => {
      writeFile(path, data, { mode, ...opts }, error => {
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
