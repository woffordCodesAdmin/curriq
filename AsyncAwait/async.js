
let nikeSite = {
    url: 'https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok',
    selector: '.product-card__link-overlay',
    subSelector: '.product-card'
}
let champsSite = {
    url: 'https://www.champssports.com/category/sport/basketball/shoes/jordan.html?query=basketball%3Arelevance%3Asport%3ABasketball%3Aproducttype%3AShoes%3Abrand%3AJordan%3Agender%3AMen%27s',
    selector: '.ProductCard'
}
let footlockerSite = {
    url: 'https://www.footlocker.com/category/brands/jordan.html',
    selector: '.ProductCard' 
}

let jordanCollector = [nikeSite.url,champsSite.url,footlockerSite.url]
const fetchAllData = async () =>{ 
    // use Async to start a process, and allow process to complete and then return a promise. 
        fetch(nikeSite.url)
        .then((response) => response.json())
            .then((data) => console.log(data.body));
    
}
fetchAllData()