function searchProduct(){

    let input =
    document.getElementById("searchBox")
    .value
    .toLowerCase();

    let boxes =
    document.querySelectorAll(".box");

    let found = false;

    boxes.forEach(function(box){

        let text =
        box.innerText.toLowerCase();

        if(input === "" || text.includes(input)){

            box.style.display = "block";

            found = true;

        }
        else{

            box.style.display = "none";

        }

    }) 

    if(found){

        document.getElementById("notFound")
        .style.display = "none";

    }
    else{

        document.getElementById("notFound")
        .style.display = "block";

    }

}

function openLogin(){

    window.location.href =
    "login.html";

}
let user =
localStorage.getItem("amazonUser");

if(user){

    document.getElementById("userName")
    .innerText =
    "Hello, " + user;

}
function logout(){

    localStorage.removeItem("amazonUser");

    window.location.href =
    "login.html";

}
let count =
localStorage.getItem("cartCount") || 0;

document.querySelector("#count")
.innerText = count;

let cartProducts =
JSON.parse(localStorage.getItem("cartProducts"))
|| [];

function addToCart(product,price){

    let existingProduct =
    cartProducts.find(item =>
        item.name === product
    );

    if(existingProduct){

        existingProduct.quantity++;

    }
    else{

        cartProducts.push({

            name:product,
            price:price,
            quantity:1

        });

    }

    count++;

    document.querySelector("#count")
    .innerText = count;

    localStorage.setItem(
        "cartCount",
        count
    );

    localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
    );

}
function openCartPage(){

    window.location.href =
    "cart.html";

}

function checkout(){

    window.location.href =
    "checkout.html";

}

function darkMode(){

    document.body.classList.toggle("dark");

}

