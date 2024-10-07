import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'script.js');

  const child = fork(pathToFile, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 'a']);
