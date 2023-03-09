console.log("welcome to js file");
// nav bar configurations starts
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
// nav bar configuration ends
// register and sign up starts
let modal1 = document.getElementById("register");
modal1.addEventListener('mouseover', (e) => {
    document.getElementById('registerbox').style.display = 'block';
})
modal1.addEventListener('mouseleave', (e) => {
    setTimeout(() => {

        document.getElementById('registerbox').style.display = 'none';
    }, 1000);
})
//modal 2
let modal2 = document.getElementById("signup");
modal2.addEventListener('mouseover', (e) => {
    document.getElementById('signupbox').style.display = 'block';
})
modal2.addEventListener('mouseleave', (e) => {
    setTimeout(() => {

        document.getElementById('signupbox').style.display = 'none';
    }, 1000);
})




// console.log(floter)  