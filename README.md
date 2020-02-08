# Reading and writing UTF-8 encoded text files

Makes reading and saving text files simple and more descriptive:

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

### Synchronous API

```javascript
const {
  readTextFileSync,
  createTextFileSync,
  writeTextFileSync,
  appendTextFileSync
} = require("@mrothnet/textfile");

// Read UTF-8 encoded text file
const content = readTextFileSync("path/filename.txt");

// Create new text file (fails if file already exists)
createTextFileSync("path/filename.txt", "Hello, World!");

// Replace or create text file
writeTextFileSync("path/filename.txt", "New file content");

// Append to existing file or create new one
appendTextFileSync("path/filename.txt", "This line will be appended\n");
```

### Promise API

```javascript
const {
  readTextFile,
  createTextFile,
  writeTextFile,
  appendTextFile
} = require("@mrothnet/textfile");

// Read UTF-8 encoded text file
const content = await readTextFile("path/filename.txt");

// Create new text file (fails if file already exists)
await createTextFile("path/filename.txt", "Hello, World!");

// Replace or create text file
await writeTextFile("path/filename.txt", "New file content");

// Append to existing file or create new one
await appendTextFile("path/filename.txt", "This line will be appended\n");
```

### Callback API

```javascript
const {
  readTextFile,
  createTextFile,
  writeTextFile,
  appendTextFile
} = require("@mrothnet/textfile");

// Read UTF-8 encoded text file
readTextFile("path/filename.txt", (error, content) => {
  // ...
});

// Create new text file (fails if file already exists)
createTextFile("path/filename.txt", "Hello, World!", error => {
  // ...
});

// Replace or create text file
writeTextFile("path/filename.txt", "New file content", error => {
  // ...
});

// Append to existing file or create new one
appendTextFile("path/filename.txt", "This line will be appended\n", error => {
  // ...
});
```

## Contributing

Pull requests, patches, emails, and issues are welcomed!

## Author

- [Michael Roth](https://mroth.net/) <[<mail@mroth.net>](mailto:mail@mroth.net)>

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.
