const parseEnv = () => {
  const processObj = process.env;
  const keys = Object.keys(processObj).filter((key) => key.startsWith('RSS_'));
  const resArr = keys.map((key) => key + '=' + processObj[key]);
  const result = resArr.join('; ');
  console.log(result);
};

parseEnv();
