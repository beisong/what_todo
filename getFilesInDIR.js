const fs = require('fs');
const path = require('path');

const isDirectory = thispath => fs.statSync(thispath).isDirectory();
const isFile = thispath => fs.statSync(thispath).isFile();

const getFilesInDIR = (dir, filesArray)=> {

  if(!filesArray){
    filesArray = [];
  }

  const readResult = fs.readdirSync(dir);

  readResult.forEach(result => {
    const resultDIR = path.join(dir, result);
    if(isDirectory(resultDIR)){
      filesArray = getFilesInDIR(resultDIR, filesArray)
    }
    else if (isFile(resultDIR)){
      filesArray.push(resultDIR);
    }
  });

  return filesArray;
};

module.exports = getFilesInDIR;
