// Here are javascript code active menu by click
// const links = document.querySelectorAll(".nav-link");

// links.forEach((link)=> {
//     link.addEventListener("click", function(){
//         links.forEach((e)=> {
//         	e.classList.remove('active')
//         })
//         this.classList.add('active')
//     })
// })


document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(kat).style.display = "block";
  evt.currentTarget.className += " active";

}




		




