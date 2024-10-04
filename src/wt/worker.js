import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const result = nthFibonacci(workerData);
    parentPort.postMessage({ status: 'resolved', data: result });
  } catch (err) {
    parentPort.postMessage({ status: 'error', data: null });
  }
};

sendResult();
