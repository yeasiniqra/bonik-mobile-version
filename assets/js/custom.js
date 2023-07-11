// Here are javascript code active menu by click
const links = document.querySelectorAll(".nav-link");

links.forEach((link)=> {
    link.addEventListener("click", function(){
        links.forEach((e)=> {
        	e.classList.remove('active')
        })
        this.classList.add('active')
    })
})




		




