console.log("ni1bgib");
function random_number_generator() {
    let r = Math.ceil(0 + Math.random() * 255)
    let g = Math.ceil(0 + Math.random() * 255);
    let b = Math.ceil(0 + Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(box => {
    box.style.backgroundColor = random_number_generator();
    box.style.color = random_number_generator();

})

        
   