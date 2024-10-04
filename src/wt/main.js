import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const cpus = os.cpus();
const numbOfCores = cpus.length;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  function createWorker(data) {
    return new Promise((resolve) => {
      const worker = new Worker(pathToFile, { workerData: data });
      worker.on('message', (message) => {
        resolve(message);
      });
    });
  }

  const workers = [];

  for (let i = 0; i < numbOfCores; i++) {
    workers.push(10 + i);
  }

  Promise.all(workers.map(createWorker))
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

await performCalculations();
