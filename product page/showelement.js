var show=JSON.parse(localStorage.getItem("showelement"))||[];
console.log(show);
     function update(array){
 
    var maindiv=document.querySelector("#container");
    array.forEach(function(element){
var newdiv=document.createElement("div");
var imgdiv=document.createElement("div");
var img=document.createElement("img");
var name=document.createElement("h3");
var sprice=document.createElement("p");
var price=document.createElement("p");
var cart=document.createElement("button");
var review=document.createElement("img");
var deldate=document.createElement("p");
review.setAttribute("src","data:image/png;base64,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");

img.setAttribute("src",element.url);
    name.textContent=element.name;
    sprice.textContent=element.strike_price;
    price.textContent=element.price;
    cart.textContent="Add to cart";
    deldate.textContent="Delivery by tomorrow 10:00 pm";

    
    imgdiv.append(img);
    
    newdiv.append(name,review,sprice,price,cart,deldate);
    
    maindiv.append(imgdiv);

    maindiv.append(newdiv);

    cart.addEventListener("click",function(){
        var cartarray=JSON.parse(localStorage.getItem("cart"))||[];
        cartarray.push(element);
        localStorage.setItem("cart",JSON.stringify(cartarray));
        alert("Item added to cart");
    });
});
     };
     update(show);
