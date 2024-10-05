import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
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
