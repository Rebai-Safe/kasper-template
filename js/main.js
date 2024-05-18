//******______ slider _____******
//***---- 1.Get elements
let images = Array.from(document.querySelectorAll(".slider img"));
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let bullets = Array.from(document.querySelector(".bullets").children);

//***-- define variables
let current = 1;

disableChecker();

prevButton.onclick = function () {
    if (current > 1) {
        current--;
        changeImage();
    }
}

nextButton.onclick = function () {
    if (current < 3) {
        current++;
        changeImage();
    }
}

function changeImage() {

    setImagesActiveProperty();
    setBulletsActiveProperty();
    images[current - 1].classList.add("active");
    bullets[current - 1].classList.add("active");
    disableChecker();


}

function setImagesActiveProperty() {
    images.forEach(image => {
        image.classList.remove("active");
    })
}

function setBulletsActiveProperty() {
    bullets.forEach(bullet => {
        bullet.classList.remove("active");
    })
}


function disableChecker() {
    if (current === 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
    if (current === images.length) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}

//***** change header color on scroll *****/
let header = document.querySelector("header");
let menuItems = document.querySelectorAll("header nav ul li a ")

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const mainColor = "#19c8fa";
    if (scrollPosition < 500){
        header.style.backgroundColor = "transparent";
        menuItems[0].style.color = mainColor;
        menuItems.forEach((item) =>{
            item.addEventListener("mouseover", ()=>{
               item.style.color = mainColor;
            })
            item.addEventListener("mouseout", ()=>{
                item.style.color = "white";
            })
        })

    }
    else {
        header.style.backgroundColor = mainColor;
        menuItems[0].style.color = "white";
        menuItems.forEach((item) =>{
            item.addEventListener("mouseover", ()=>{
                item.style.color = "white";
            })
        })
    }

})

function getColorForScrollPosition(scrollPosition) {

}
