import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
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
