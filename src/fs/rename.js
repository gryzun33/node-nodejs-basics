import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToOldFile = path.join(__dirname, 'files', 'wrongFilename.txt');
  const pathToNewFile = path.join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.access(pathToOldFile);
    await fs.access(pathToNewFile);
    throw new Error('such file exist');
  } catch (err) {
    if (err.path === pathToOldFile && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else if (err.message === 'such file exist') {
      throw new Error('FS operation failed');
    } else if (err.path === pathToNewFile && err.code === 'ENOENT') {
      await fs.rename(pathToOldFile, pathToNewFile);
    } else {
      console.error(err.message);
    }
  }
};

await rename();
