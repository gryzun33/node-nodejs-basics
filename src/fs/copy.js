import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToOldDir = path.join(__dirname, 'files');
  const pathToNewDir = path.join(__dirname, 'files-copy');
  try {
    await fs.access(pathToOldDir, fs.constants.F_OK);
    await fs.mkdir(pathToNewDir);
    const files = await fs.readdir(pathToOldDir);
    for (const file of files) {
      const pathToOldFile = path.join(pathToOldDir, file);
      const pathToNewFile = path.join(pathToNewDir, file);
      await fs.copyFile(pathToOldFile, pathToNewFile);
    }
  } catch (err) {
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err.message);
    }
  }
};

await copy();
