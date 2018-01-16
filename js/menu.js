// JavaScript Document
$(document).ready(function(){
  $(".blackCover").fadeOut(0);

  var open = 0;
  var anTime = 500;

  $('#menuButton').click(function(){
    //animate the button and open the nav
    if(open == 0){
      $(".blackCover").fadeIn(anTime);
      $('.main_menu').animate({
        left: "+300px"
      }, anTime);
      open = 1;
    } else if (open == 1){
      $(".blackCover").fadeOut(anTime);
      $('.main_menu').animate({
        left: "-300px"
      }, anTime);
      open = 0;
    }
  });//Click menuButton

  $('.blackCover').click(function(){
    $(".blackCover").fadeOut(anTime);
    $('.main_menu').animate({
      left: "-300px"
    }, anTime);
    open = 0;
  });//Click off


  $("#mapLinkOne").click(function(){
    $("#mapOne").fadeIn('fast');
    return false;
  });

  $("#mapLinkTwo").click(function(){
    $("#mapOne").fadeOut('fast');
    return false;
  });






}); //Close Doc ready
