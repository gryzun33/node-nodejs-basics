import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const remove = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.rm(pathToFile);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err.message);
    }
  }
};

await remove();
