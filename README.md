# arraybuffer-to-hex

[![npm][badge-npm]][project-npm]
[![Build Status][badge-circle]][project-circle]
[![Coverage Status][badge-coveralls]][project-coveralls]
[![npm downloads][badge-npm-downloads]][project-npm]
[![TypeScript Support][badge-type-ts]][project-v-api]

## About
This `arraybuffer-to-hex` little utility converts an ArrayBufer to hexdecimal string.

## Usage
```js
import { arrayBufferToHex } from '@obsessiveo/arraybuffer-to-hex';

const view = new Uint8Array([10, 255, 171]);
const result = arrayBufferToHex(view.buffer);

console.log(result); // 0affab
```
