const PORT = 3000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const res = require("express/lib/response");
const app = express();

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

const nike = {
  site: "https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok",
  selector: ".product-card",
};
const jordan = {
  site: "",
  selector: "",
};
const yeezy = {
  site: "",
  selector: "",
};
const nikeSB = {
  site: "",
  selector: "",
};
const shoeContainer = [];



app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

const scrapeShoe = () => {
  axios("https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok").then(
    (res) => {
      const site = res.data;
      const $ = cheerio.load(site);
      $(".product-card", site).each(function () {
        let scrapedShoe = $(this).text().split("<")[0];
        let imageURL = $(this).find("a").attr("href");

        let kiq = {
          name: scrapedShoe,
          image: imageURL,
        };
        shoeContainer.push(kiq);
      });
      console.log(shoeContainer);
    }
  );
};
scrapeShoe()



app.listen(PORT, () => {
  console.log("Server Running on port8k");
});
