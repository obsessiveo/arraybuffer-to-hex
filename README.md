# arraybuffer-to-hex
> small conversion typescript utility

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
