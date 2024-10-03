import { createReadStream } from 'fs';
import path from 'path';
import * as url from 'url';

const read = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, './files/fileToRead.txt');
  const stream = createReadStream(pathToFile);

  let data = '';

  stream.on('data', (chunk) => {
    data += chunk;
  });

  stream.on('end', () => {
    process.stdout.write(data + '\n');
  });
};

await read();
