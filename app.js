const getFilesInDIR = require('./getFilesInDIR');
const todoFound = require('./todoFound');

getFilesInDIR(process.cwd()).forEach( filePath => {
  //Check each file for todo and print dir
  if(todoFound(filePath)) {
    console.log(filePath);
  }
});
