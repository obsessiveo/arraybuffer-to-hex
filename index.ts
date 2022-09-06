/**
 * Convert an array of bytes to a hex string
 * @param buffer the array buffer to convert
 * @returns the converted hex string
 */
export function arrayBufferToHex(buffer: ArrayBuffer): string {
  return Array.prototype.map
    .call(new Uint8Array(buffer), (x) => ('00' + x.toString(16)).slice(-2))
    .join('');
}

// Language: typescript
// Path: index.ts
