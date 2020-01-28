"use strict";

const { readFile, readFileSync, writeFile, writeFileSync } = require("fs");

const utf8opts = { encoding: "utf8" };

const writeOpts = { flag: "w", ...utf8opts };
const appendOpts = { flag: "a", ...utf8opts };
const createOpts = { flag: "wx", ...utf8opts };

function readTextFileSync(path) {
  return readFileSync(path, utf8opts);
}

function writeSync(opts, path, data, { mode } = {}) {
  writeFileSync(path, data, {mode, ...opts});
}

const writeTextFileSync = (...args) => writeSync(writeOpts, ...args);
const appendTextFileSync = (...args) => writeSync(appendOpts, ...args);
const createTextFileSync = (...args) => writeSync(createOpts, ...args);

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

function write(opts, path, data, arg4, arg5) {
  if (arguments.length == 4 && typeof arg4 == "function") {
    const callback = arg4;
    return writeFile(path, data, opts, callback);
  }

  const { mode } = arg4 || {};

  if (arguments.length >= 5) {
    const callback = arg5;
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

const writeTextFile = (...args) => write(writeOpts, ...args);
const appendTextFile = (...args) => write(appendOpts, ...args);
const createTextFile = (...args) => write(createOpts, ...args);

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
