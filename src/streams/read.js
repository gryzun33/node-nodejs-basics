import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(pathToFile);

  stream.pipe(process.stdout);
  stream.on('end', () => {
    process.stdout.write(`${os.EOL}`);
  });
};

await read();
