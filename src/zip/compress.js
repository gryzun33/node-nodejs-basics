import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathToZipFile = path.join(__dirname, 'files', 'archive.gz');
  const readable = createReadStream(pathToFile);
  const writeable = createWriteStream(pathToZipFile);
  const gzip = createGzip();
  pipeline(readable, gzip, writeable, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    }
  });
};

await compress();
