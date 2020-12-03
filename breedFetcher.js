const request = require("request");
const breedName = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Cat breed cannot be found, please try another breed.");
  } else if (error !== null) {
    console.log("Looks like something went wrong....");
  } else {
    console.log(data[0].description);
  }
});

    
    
    
    





