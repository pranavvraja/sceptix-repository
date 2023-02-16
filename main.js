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