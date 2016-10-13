$(document).ready(function(){
  buildMap();
});

var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = "http://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
var embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55078.33206647329!2d-91.12843024544611!3d30.368118187709857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRaising+Cane&#39;s+Chicken+Fingers!5e0!3m2!1sen!2sus!4v1476318390253" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

function buildMap() {
  if(sw>bp) { //If Large Screen
      if($('.map-container').length < 1) { //If map doesn't already exist
        buildEmbed();
      }
  } else {
      if($('.static-img').length < 1) { //If static image doesn't exist
        buildStatic();
      }
  }
};

function buildEmbed() { //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
};
  
function buildStatic() { //Build static map
   var mapLink = $('.map-link').attr('href'),
       $img = $('<img class="static-img" />').attr('src',static);
   $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
}

$(window).resize(function() {
  sw = document.body.clientWidth;
  buildMap();
  google.maps.event.trigger(map, "resize");
});