var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4050);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("header").style.display = "block";
}