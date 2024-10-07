import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
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
