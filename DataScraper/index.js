const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const url = "https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok";
const shoeContainer = []

// const generateSneakerImages = ([sneakers]) => {
    // const shoebox = document.querySelector('.sneakerContainer')

//     sneakers.forEach(kicks => {
//         let shoe = document.createElement('img')
//         shoe.setAttribute('src',kicks)
//         shoe.setAttribute('class','mainKiq')

//         shoebox.push(kicks)
//     });
// }

const pushToContainer = () => {
    axios(url).then((res) => {
        const site = res.data;
        // console.log(site)
      
        const $ = cheerio.load(site);
        $(".product-card", site).each(function(){
          
          const imageURL = $(this).find("a").attr("href");
          
          shoeContainer.push({
              imageURL
          })
      });
   console.log(shoeContainer) 
      }) 
}
    

pushToContainer()

app.listen((PORT) => {
  console.log("Server Running on port8k");
});
