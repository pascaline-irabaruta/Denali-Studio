$(document).ready(function(){

$( '#ima' ).click(
  function() {
    $('.designs').show();
    $('#ima').hide();
    $('#d').hide();

  }
);

$( '#ima2' ).click(
  function() {
    $('.dev').show();
    $('#ima2').hide();
    $('#de').hide();
  }
);

$( '#ima3' ).click(
  function() {
    $('.products').show();
    $('#ima3').hide();
    $('#pro').hide();
  }
);
$( '.designs' ).click(
  function() {
    $('.designs').hide();
    $('#ima').show();
    $('#d').show();

  }
);

$( '.dev' ).click(
  function() {
    $('.dev').hide();
    $('#ima2').show();
    $('#de').show();
  }
);

$( '.products' ).click(
  function() {
    $('.products').hide();
    $('#ima3').show();
    $('#pro').show();
  }
);


});
