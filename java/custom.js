const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle1");

btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};


const hiddendiv = document.getElementById("projecthide");
const btn = document.getElementById("unhide");

btn.onclick = function () {
    if (hiddendiv.style.display !== "none") {
        hiddendiv.style.display = "none";
    } else {
        hiddendiv.style.display = "block";
    }
};

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }