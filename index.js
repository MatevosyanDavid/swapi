const path = require('path');
const fs = require('fs');
const axios = require('axios');

// console.log(axios, '>>>>>>>');

const file = path.join(__dirname, 'starships.json');

for(let i = 1; i < 100; i++) {
  axios(`https://www.swapi.tech/api/starships/${i}`)
  .then(data => {
    fs.appendFile(file, JSON.stringify(data.data.result.properties, null, 2), err => {
      if (err) throw err;
      console.log('file be Changed');
      fs.readFile(file, 'UTF8', (err, data) => {
        if (err) throw err;
        console.log(data);
      })
    })
  })
  .catch(err => console.error(err));
}
