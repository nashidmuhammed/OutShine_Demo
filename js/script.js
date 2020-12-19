


function saveFunction() {
    var element = document.getElementById("save");
    element.addEventListener("click", saveFunction);
    console.log("got itttttt");
    element.classList.toggle("fa-bookmark-o");
  }