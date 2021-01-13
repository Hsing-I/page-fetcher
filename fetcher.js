const request = require('request');
const fs = require('fs'); 

const saveToFile = (url, filePath) => {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); 
    //console.log('body:', body); 
    const responseMessage = `${body}`;
  
    fs.writeFile(filePath, responseMessage, (err) => { 
      if (err) 
        console.log(err); 
      else { 
        const size = fs.statSync(filePath).size;
        console.log(`Donloaded and saved ${size} bytes to ${filePath}`); 
      } 
    }); 
  })
};


const url = process.argv.slice(2)[0];
const filePath = process.argv.slice(2)[1];
saveToFile(url, filePath);
