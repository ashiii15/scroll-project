// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const fot = document.getElementById("date")
fot.innerHTML = new Date().getFullYear()

// ********** close links ************
const btn = document.querySelector(".nav-toggle")
const linkContainer = document.querySelector(".links-container")
const link = document.querySelector(".links")
btn.addEventListener("click",function(){
    // linkContainer.classList.toggle("show-links")
    let containerLength = linkContainer.getBoundingClientRect().height
    let linkLength = link.getBoundingClientRect().height
    // console.log(linkLength);
    if(containerLength === 0){
        linkContainer.style.height = `${linkLength}px`
    }
    else{
        linkContainer.style.height = 0 
    }

})


// ********** fixed navbar ************
const navbarFix = document.querySelector(".fixed-nav")
const nav = document.getElementById("nav")
const topLink = document.querySelector(".top-link")
window.addEventListener("scroll",function(){
    const scrollHeight = window.scrollY;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        nav.classList.add("fixed-nav")
    }
    else{
        nav.classList.remove("fixed-nav")
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link")
    }else{
        topLink.classList.remove("show-link")
    }  
})

// ********** smooth scroll ************
// select links
