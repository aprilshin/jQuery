console.log("here")
var imgs = $('img');
var msg = "Hover over an image below."

imgs.each(function () {
  $(this).mouseenter(function () {
    $('#image').css('background-image', "url('../jQuery/" + $(this).attr('src') + "')");
    $('#image').text($(this).attr('alt'));
  });

  $(this).focus(function () {
    $('#image').css('background-image', "url('../jQuery/" + $(this).attr('src') + "')");
    $('#image').text($(this).attr('alt'));
  });
  
  $(this).mouseleave(function () {
    $('#image').css('background-image', "url('')");
    $('#image').text(msg);
  });

  $(this).blur(function () {
    $('#image').css('background-image', "url('')");
    $('#image').text(msg);
  });
});
