console.log("welcome to js file");
let cross = document.getElementById("cross");
// console.log(cross)
let home = document.getElementById("ham-bar");
home.addEventListener('click', () => {
    let box = document.getElementById("ham-menu-box");
    // console.log(box);
    setTimeout(() => {

        box.classList.toggle('moveout');
    }, 300)
})

cross.addEventListener('click', () => {
    let box = document.getElementById("ham-menu-box");
    setTimeout(() => {

        box.classList.toggle('moveout');
    }, 100)
})
console.log(home)