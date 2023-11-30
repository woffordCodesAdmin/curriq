const getSomething = async() =>{
    const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    const data= await response.body
    console.log(data)
}
getSomething()