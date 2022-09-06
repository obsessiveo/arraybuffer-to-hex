# arraybuffer-to-hex
> small conversion typescript utility

[![Npm package version](https://badgen.net/npm/v/@obsessiveo/arraybuffer-to-hex)](https://www.npmjs.com/package/@obsessiveo/arraybuffer-to-hex)
[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)

---

## About
This `arraybuffer-to-hex` little utility converts an ArrayBufer to hexdecimal string.

## Usage
```js
import { arrayBufferToHex } from '@obsessiveo/arraybuffer-to-hex';

const view = new Uint8Array([10, 255, 171]);
const result = arrayBufferToHex(view.buffer);

console.log(result); // 0affab
```
