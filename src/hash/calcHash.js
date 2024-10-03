import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import * as url from 'url';

const calculateHash = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, './files/fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const stream = createReadStream(pathToFile);

  stream.on('data', (data) => {
    hash.update(data);
  });

  stream.on('end', () => {
    const result = hash.digest('hex');
    process.stdout.write(result + '\n');
  });
};

await calculateHash();
