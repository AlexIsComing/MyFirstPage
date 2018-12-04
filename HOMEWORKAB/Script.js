
function init(){
//task 2
    document.getElementById("first").src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    let images =document.getElementById("container").getElementsByTagName("img");
    document.getElementById("container").getElementsByTagName("img")[3].src= "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[4].src= "flower1.png"
//task 3
    document.getElementById("vide").innerHTML = "You are doing great!";
//task 4
    let image = document.createElement("img");
    image.setAttribute("src","flower2.png");
    document.getElementById("new_element").appendChild(image);
//task 5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }

//task 6
    var changeSrc = function (event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename == "flower1.png") {
                event.target.src = "flower2.png";
            } else {
                event.target.src = "flower1.png";
            }
        }


    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);
}

