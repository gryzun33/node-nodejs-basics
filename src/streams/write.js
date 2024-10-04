import { createWriteStream, read } from 'fs';
import path from 'path';
import * as url from 'url';

const write = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, './files/fileToWrite.txt');
  const writable = createWriteStream(pathToFile);
  const readable = process.stdin;
  readable.pipe(writable);
};

await write();
