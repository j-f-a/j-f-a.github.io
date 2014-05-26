$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

$(document).ready(function(){
  var windowHeight = $(window).height();
  var bulletinHeight = $('#bulletin-expand').height();
  
  $('.fill-window').height(windowHeight);
  $('.flexslider .slides li').height(windowHeight);
  
  $('header ul a').click(function() {
    $('header ul a').removeClass('active');
    $(this).toggleClass('active');
    return false;
  });
  
  $('.issue-first').waypoint(function() {
    $('body').removeClass('invert');
    $('.nav-link').removeClass('active');
    $('#nav-issue').addClass('active');
  });
  
  $('.issue-footer a').click(function() {
    $(this).parent().find('a').removeClass('selected');
    $(this).addClass('selected');
  });
  
  $('.section-shop').waypoint(function() {
    $('body').removeClass('invert');
    $('.nav-link').removeClass('active');
    $('#nav-shop').addClass('active');
  });
  
  $('.item-name a').click(function() {
    $(this).parent().find('a').removeClass('selected');
    $(this).addClass('selected');
  });
  
  $('.section-about').waypoint(function() {
    $('body').addClass('invert');
    $('.nav-link').removeClass('active');
    $('#nav-about').addClass('active');
  });
  
  $('.section-bulletin').waypoint(function() {
    $('body').addClass('invert');
    $('.nav-link').removeClass('active');
    $('#nav-bulletin').addClass('active');
    $('.section-bulletin textarea').focus();
  });
  
  if (windowHeight > bulletinHeight) {
    console.log(windowHeight);
    console.log(bulletinHeight);
    console.log('expand bulletin');
    $('#bulletin-expand').height(windowHeight);
  }
  
  $('.section-bulletin textarea').attr("placeholder", "Enter your email in this box to receive Bad Day Bulletin, an occasional e-newsletter full of updates about book fairs, new issues, events and things of that nature.");
  $('.section-bulletin input').addClass('submit');
  
  $('.section-bulletin input').click(function() {
  });
});