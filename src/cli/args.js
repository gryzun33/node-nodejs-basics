import { argv } from 'node:process';

const parseArgs = () => {
  const arrArgs = argv.slice(2);
  const resultArr = [];
  for (let i = 0; i < arrArgs.length - 1; i += 2) {
    const str = arrArgs[i].slice(2) + ' is ' + arrArgs[i + 1];
    resultArr.push(str);
  }
  const result = resultArr.join(', ');
  console.log(result);
};

parseArgs();
