import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

try {
    const jsoncContent = readFileSync(resolve(import.meta.dirname, 'config.jsonc'), 'utf-8');
    // converts jsonc to json by removing all comments
    const jsoncToJson = jsoncContent.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => (g ? '' : m));
    const minifiedJson = JSON.stringify(JSON.parse(jsoncToJson));
    writeFileSync(resolve(import.meta.dirname, 'js/config.js'), `var json=${minifiedJson}`, 'utf-8');
} catch (e) {
    console.error(e);
    process.exit(1);
}
