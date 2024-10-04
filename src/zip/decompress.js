import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import * as url from 'url';

const decompress = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathToZipFile = path.join(__dirname, 'files', 'archive.gz');
  const readable = createReadStream(pathToZipFile);
  const writeable = createWriteStream(pathToFile);
  const gunzip = createGunzip();
  pipeline(readable, gunzip, writeable, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    }
  });
};

await decompress();
