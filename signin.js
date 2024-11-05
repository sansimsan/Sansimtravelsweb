let name = document.getElementById("name")
let rating = document.getElementById("rating")
let form = document.querySelector("form")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    alert(`Thanks for your valuable ${rating.value} stars feedback ${name.value}!`)
    name.value = "";
    rating.value = 0;
    window.location.href = "./index.html";
})