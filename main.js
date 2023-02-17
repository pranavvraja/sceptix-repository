var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3050);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("header").style.display = "block";
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("actice-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("actice-tab");
}




window.onscroll = function() {myFunction1()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction1() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 