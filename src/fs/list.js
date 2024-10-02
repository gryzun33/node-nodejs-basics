import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const list = async () => {
  // Write your code here
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToDir = path.join(__dirname, 'files');

  try {
    await fs.access(pathToDir);
    const files = await fs.readdir(pathToDir);
    console.log(files);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err.message);
    }
  }
};

await list();
