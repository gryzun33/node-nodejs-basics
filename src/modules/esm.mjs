import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import * as url from 'url';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const pathToA = path.join(__dirname, './files/a.json');
const pathToB = path.join(__dirname, './files/b.json');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  const data = await fs.readFile(pathToA, 'utf8');
  unknownObject = JSON.parse(data);
} else {
  const data = await fs.readFile(pathToB, 'utf8');
  unknownObject = JSON.parse(data);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
