# What todo?
This app will list files containing the keyword "TODO" from directories and subdirectories for easy viewing of your TODO list

## Dependencies
- [Node.js](https://nodejs.org/en/) (build and tested on v10 but should work with other versions)
- [Mocha](https://mochajs.org/)  (testing framework)

## Running the application
- `npm start`

## Expected output
```
C:\yourprojectdirectory\what_todo\Readme.md
C:\yourprojectdirectory\what_todo\somedir\somemodule\somefile.js
C:\yourprojectdirectory\what_todo\somedir\somemodule\someotherfile.js
C:\yourprojectdirectory\what_todo\somedir2\anotherdir\index.js
C:\yourprojectdirectory\what_todo\somedir2\anotherdir\yet_another_dir\index.js
and more...
```

##Running the tests
- `npm install` to install mocha dependencies
- `npm test` to run the tests 

## test output
```
> mocha
  Testing getFilesInDIR
    When run on /test
      √ should return array with 6 files
    When run on /test/dirwithouttodos
      √ should return array with length 1
      √ should return the correct path for file
    When run on empty dir
      √ should return array with length 0

  Testing todoFound
    When run on a file with TODO
      √ should return true
    When run on a file without todo
      √ should return false

  Integration testing of getFilesInDIR and todoFound
    When run on /test/dirwithtodos
      √ should return true for the 3 files
    When run on /test/dirwithouttodos
      √ should return false for 1 files

  8 passing (21ms)
```