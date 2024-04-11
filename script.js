fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((data)=>map((data)))
.catch((error)=>console.log("API Error",error))


const map = (data) =>
{
    data.map((ele) =>
    {
       let Pro_Title = document.createElement("h5");
       Pro_Title.innerHTML=`Title :- ${ele.title}`

        let Pro_Image = document.createElement("img");
        Pro_Image.src = ele.image

       let Pro_Description = document.createElement("h6");
       Pro_Description.innerHTML = ele.description
        
        let Pro_Price = document.createElement("p");
        Pro_Price.innerHTML= `Price :-  ₹ ${ele.price}`

        let Pro_Rating = document.createElement("p");
        Pro_Rating.innerHTML = `Rating :- ${ele.rating.rate}`

        let Pro_Brand = document.createElement("h6");
        Pro_Brand.innerHTML = `Brand :- ${ele.brand}`

        let Pro_Category = document.createElement("p");
        Pro_Category.innerHTML =`Category :- ${ele.category}`

       let Div = document.createElement("div");
       Div.append(Pro_Image,Pro_Title,Pro_Description,Pro_Price,Pro_Rating,Pro_Brand,Pro_Category)
       document.querySelector("#data_1").append(Div)
    })
}
