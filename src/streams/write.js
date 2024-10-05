import { createWriteStream, read } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writable = createWriteStream(pathToFile);
  const readable = process.stdin;
  readable.pipe(writable);
};

await write();
