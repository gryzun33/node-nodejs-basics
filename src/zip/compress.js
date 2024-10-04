import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import * as url from 'url';

const compress = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
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
