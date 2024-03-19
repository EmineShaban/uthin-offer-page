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

let seeMore = document.getElementsByClassName("see-more")[0]

let text = document.getElementsByClassName("doc-text2")[0]


function onClick(){
    console.log(seeMore.innerText)
    console.log(text)

     if(seeMore.innerText == "See More"){
        text.style.display = "block"
        seeMore.innerText = "See Less"
    }else{
        text.style.display = "none"
        seeMore.innerText = "See More"
    }
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
 