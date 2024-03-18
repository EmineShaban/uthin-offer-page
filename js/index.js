let acc = document.getElementsByClassName("q");
var speed = "500";
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");  

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"; 
        } else {
            panel.style.display = "block"; 
        }
    });
}


// // Accordian FAQ
// var action = "click";
// var speed = "500";

// $(document).ready(function () {
//     $('li.q').on(action, function () {
//         $(this).next()
//             .slideToggle(speed)
//             .siblings('li.a')
//             .slideUp();
//     });
// });