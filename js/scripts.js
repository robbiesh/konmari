setTimeout(function(){
  var element = document.getElementById("invader");
  element.classList.add("invader--open");
}, 2000);

function removeClass() {
  var element = document.getElementById("invader");
  element.classList.remove("invader--open");
}
