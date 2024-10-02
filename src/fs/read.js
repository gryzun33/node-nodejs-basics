import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const read = async () => {
  // Write your code here
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
  try {
    const text = await fs.readFile(pathToFile, 'utf8');
    console.log(text);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err.message);
    }
  }
};

await read();
