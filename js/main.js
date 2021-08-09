$(document).ready(function(){
    console.log('hi there!');
    $(".submenu").on("show", function() {
        console.log("showing");
        this.slideUp("slow");
    })
  });