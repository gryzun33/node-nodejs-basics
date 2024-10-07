import os from 'os';
import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const chunkToString = chunk.toString().trim();
      const reversedChunk = chunkToString.split('').reverse().join('');
      this.push(reversedChunk + `${os.EOL}`);
      callback();
    },
  });

  pipeline(stdin, transformStream, stdout, (err) =>
    console.error(`Error:${err}`)
  );
};

await transform();
