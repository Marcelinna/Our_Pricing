const toggle = document.querySelector(".switch-toggle");
const priceMonthly = document.querySelectorAll(".price-monthly")
const priceAnnually = document.querySelectorAll(".price-annually")


toggle.addEventListener("click", ()=>{
    priceMonthly.forEach(value=>{
        value.classList.toggle("show-mononthly")
    })

    priceAnnually.forEach(value=>{
        value.classList.toggle("hide-annually")
    })
  

})