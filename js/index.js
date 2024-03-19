let acc = document.getElementsByClassName("q");
var speed = "500";
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.classList.toggle("aa");

            panel.style.display = "none";
        } else {
            this.classList.toggle("aa");

            panel.style.display = "block";
        }
    });
}



 
// var acc = document.getElementsByClassName("q");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//      panel.style.display = "none";

//     } else {
//       panel.style.maxHeight = 95 + "px";
//   panel.style.display = "block";

//     }
//   });
// }
 