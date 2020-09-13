const fs = require('fs');

const todoFound = path => {
  return (
    fs.readFileSync(path)
      .toString()
      .indexOf("TODO") !== -1
  );
};

module.exports = todoFound;
