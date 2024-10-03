import { createWriteStream } from 'fs';
import path from 'path';
import * as url from 'url';
const { stdin, stdout } = process;

const write = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = path.join(__dirname, './files/fileToWrite.txt');
  const stream = createWriteStream(pathToFile);

  stdin.on('data', (data) => {
    stream.write(data);
  });
};

await write();
