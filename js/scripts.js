$(document).ready(function() {
  setTimeout(function(){
    $(".invader").addClass("invader--open");
  }, 2000);
});

$(".invader-close").click(function() {
  $(".invader").removeClass("invader--open");
});
