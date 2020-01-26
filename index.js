"use strict";

const { readFile, readFileSync, writeFile, writeFileSync } = require("fs");

const utf8opts = { encoding: "utf8" };

function readTextFileSync(path) {
  return readFileSync(path, utf8opts);
}

function writeTextFileSync(path, data, options) {
  return writeFileSync(path, data, {...options, ...utf8opts});
}

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

function writeTextFile(path, data, arg3, arg4) {
  if (arguments.length == 3 && typeof arg3 == "function") {
    const callback = arg3;
    return writeFile(path, data, utf8opts, callback);
  }

  const options = {...arg3, ...utf8opts};

  if (arguments.length >= 4) {
    const callback = arg4;
    return writeFile(path, data, options, callback);
  }
  else {
    return new Promise((resolve, reject) => {
      writeFile(path, data, options, (error) => {
        if (error) reject(error); else resolve();
      });
    });
  }
}

module.exports = {
  readTextFile,
  readTextFileSync,
  writeTextFile,
  writeTextFileSync
}
