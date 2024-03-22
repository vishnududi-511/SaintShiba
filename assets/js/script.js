let menubox = document.querySelector(".menubox");
let navitems = document.querySelector(".navitems");
 
menubox.addEventListener("click", function () {
    navitems.classList.toggle("active")
})

// let accordion = document.querySelectorAll(".a-container");

// accordion.forEach(element => {
//     let text = element.querySelector(".acc-content");
//     let icon = element.querySelector(".svg_icon");
//     let label = element.querySelector(".label");

//     element.addEventListener("click", () => {
//         accordion.forEach(other => {
//             if (other !== element) {
//                 let text = other.querySelector(".acc-content");
//                 let icon = other.querySelector(".svg_icon");
//                 icon.style.transform = "rotate(0deg)";
//                 text.style.display = "none";
//             }
//         });
//         let text_prop = window.getComputedStyle(text).display;
//         if (text_prop === "none") {
//             icon.style.transform = "rotate(180deg)";
//             text.style.display = "block";
//         } else {
//             icon.style.transform = "rotate(0deg)";
//             text.style.display = "none";
//         }
//     });
// });

let accordion_box = document.querySelectorAll(".a-container");

accordion_box.forEach(items => {
    let head_box = items.querySelector(".label");

    head_box.addEventListener("click", function () {

        accordion_box.forEach(other => {
            let para = other.querySelector(".acc-content");
        let arrow = other.querySelector(".arrow");

            if (other != items) {
                para.style.display = "none"
                arrow.classList.remove("rotate")
            }
        })

        let paragraph = items.querySelector(".acc-content");
        let arrow = items.querySelector(".arrow");

        if (paragraph.style.display == "none") {
            paragraph.style.display = "block"
            arrow.classList.add("rotate")
        }
        else {
            paragraph.style.display = "none"
            arrow.classList.remove("rotate")
        }
    })
})