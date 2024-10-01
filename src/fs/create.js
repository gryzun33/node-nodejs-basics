import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const create = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
  const text = 'I am fresh and young';
  try {
    await fs.access(pathToFile, fs.constants.F_OK);
    throw new Error();
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(pathToFile, text, 'utf8');
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await create();
