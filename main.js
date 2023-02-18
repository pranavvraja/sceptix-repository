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




window.onscroll = function () { myFunction1() };

function myFunction1() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}