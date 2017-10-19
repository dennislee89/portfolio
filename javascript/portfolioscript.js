
/*Side Nav*/
function openNav() {
    document.getElementById("mySidenav").style.width = '200px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




$('li').click(function(e) {

  // Create a variable with the link found in the list-item
  var link = $(this).children('a');      
  
  $('html,body').animate({
    scrollTop: $(link.attr('href')).offset().top
  }, 2000);
});

