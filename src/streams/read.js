import { createReadStream } from 'fs';
import path from 'path';
import * as url from 'url';
import os from 'os';

const read = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, './files/fileToRead.txt');
  const stream = createReadStream(pathToFile);

  stream.pipe(process.stdout);
  stream.on('end', () => {
    process.stdout.write(`${os.EOL}`);
  });
};

await read();
