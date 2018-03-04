# neneos-azure-storage-safestring
A npm package to generate strings safe to use in azure storage

## how to install
npm install neneos-azure-storage-safestring

## usage

var cleaner = require('neneos-azure-storage-safestring');
 
console.log(cleaner.cleanBlobName.remove('crême-bruléé.jpg')); //crême-bruléé.jpg
