# Reading and writing UTF-8 encoded text files

Makes reading, saving and editing text files simple and more descriptive:

- Encoding is always UTF-8.
- Synchronous and asynchronous API.
- Typescript supported.

Differentiates between:

Read
: File must exists to be read.

Create
: File to be written is not allowed to exists already.

Write
: File to be written may exists already and gets overwritten in case.

Append
: File to be written may exists already and content is appended in case.

## Install

|               npm                |             yarn              |
| :------------------------------: | :---------------------------: |
| `npm install @mrothnet/textfile` | `yarn add @mrothnet/textfile` |

## Usage

### Asynchronous API (Promise)

#### Reading

```javascript
const { readTextFile } = require("@mrothnet/textfile");

// Read UTF-8 encoded text file
const content = await readTextFile("path/filename.txt");
```

#### Writing

```javascript
const { createTextFile, writeTextFile, appendTextFile } = require("@mrothnet/textfile");

// Create new text file (fails if file already exists)
await createTextFile("path/filename.txt", "Hello, World!");

// Replace or create text file
await writeTextFile("path/filename.txt", "New file content");

// Append to existing file or create new one
await appendTextFile("path/filename.txt", "This line will be appended\n");
```

#### Editing

```javascript
const { editTextFile } = require("@mrothnet/textfile");

// Edit an existing file with synchronous function
await editTextFile("path/filename.txt", (text) => {
  return text.toUpperCase();
});

// Edit an existing file with asynchronous function (Promise)
await editTextFile("path/filename.txt", (text) => {
  return new Promise((resolve) => {
    resolve(text.toLowerCase());
  });
});
```

### Synchronous API

#### Reading

```javascript
const { readTextFileSync } = require("@mrothnet/textfile");

// Read UTF-8 encoded text file
const content = readTextFileSync("path/filename.txt");
```

#### Writing

```javascript
const { createTextFileSync, writeTextFileSync, appendTextFileSync } = require("@mrothnet/textfile");

// Create new text file (fails if file already exists)
createTextFileSync("path/filename.txt", "Hello, World!");

// Replace or create text file
writeTextFileSync("path/filename.txt", "New file content");

// Append to existing file or create new one
appendTextFileSync("path/filename.txt", "This line will be appended\n");
```

#### Editing

```javascript
const { editTextFileSync } = require("@mrothnet/textfile");

// Edit an existing file (only synchronous)
await editTextFileSync("path/filename.txt", (text) => {
  return text.toUpperCase();
});
```

## Contributing

Pull requests, patches, emails, and issues are welcomed!

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## Author

- [Michael Roth](https://mroth.net/) <[<mail@mroth.net>](mailto:mail@mroth.net)>
