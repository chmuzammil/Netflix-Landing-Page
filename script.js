

let faq = document.querySelectorAll('.faq');
let wid = document.querySelector("html");
console.log("hehe");
console.log(wid);
faq.forEach((faq) => {
    faq.addEventListener("click", () => {


        if (wid.offsetWidth < 768) {
            if (faq.offsetHeight == 60) {

                faq.style.height = "350px"
            }
            else {
                faq.style.height = "60px"
            }

            
        }

        else {
            if (faq.offsetHeight == 100) {

                faq.style.height = "350px"
            }
            else {
                faq.style.height = "100px"
            }
        }
    })
});

let Gs = document.querySelector(".GS")

Gs.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Its Just A clone")

})
let btn = document.querySelector("#submit")
    btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Its Just A clone")

})




