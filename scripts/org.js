const org = (name) => {
  let result = (name + 'x')
    .split('')
    .sort((a, b) => Math.random() - Math.random())
    .join('');
  return result[0].toUpperCase() + result.slice(1).toLowerCase();
};
