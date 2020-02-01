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
    writeFileSync(path, data, {mode, ...opts});
  }
}

const writeTextFileSync = writeSync(writeOpts);
const appendTextFileSync = writeSync(appendOpts);
const createTextFileSync = writeSync(createOpts);

function readTextFile(path, callback) {
  if (arguments.length >= 2) {
    return readFile(path, utf8opts, callback);
  }
  else {
    return new Promise((resolve, reject) => {
      readFile(path, utf8opts, (error, data) => {
       if (error) reject(error); else resolve(data);
      });
    });
  }
}

function write(opts) {
  return (path, data, arg3, arg4) => {
    if (arguments.length == 3 && typeof arg3 == "function") {
      const callback = arg3;
      return writeFile(path, data, opts, callback);
    }

    const { mode } = arg3 || {};

    if (arguments.length >= 4) {
      const callback = arg4;
      return writeFile(path, data, {mode, ...opts}, callback);
    }
    else {
      return new Promise((resolve, reject) => {
        writeFile(path, data, {mode, ...opts}, (error) => {
          if (error) reject(error); else resolve();
        });
      });
    }
  }
}

const writeTextFile = write(writeOpts);
const appendTextFile = write(appendOpts);
const createTextFile = write(createOpts);

module.exports = {
  readTextFileSync,

  writeTextFileSync,
  appendTextFileSync,
  createTextFileSync,

  readTextFile,

  writeTextFile,
  appendTextFile,
  createTextFile
}
