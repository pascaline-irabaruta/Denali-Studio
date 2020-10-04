$(document).ready(function(){
$( '#porty' ).hover(
  function() {
    $('#txt1').show();
  }
  , function() {
    $('#txt1').hide();
  }
);
$( '#porty2' ).hover(
  function() {
    $('#txt2').show();
  }
  , function() {
    $('#txt2').hide();
  }
);
$( '#porty3' ).hover(
  function() {
    $('#txt3').show();
  }
  , function() {
    $('#txt3').hide();
  }
);
$( '#porty4' ).hover(
  function() {
    $('#txt4').show();
  }
  , function() {
    $('#txt4').hide();
  }
);
$( '#porty5' ).hover(
  function() {
    $('#txt5').show();
  }
  , function() {
    $('#txt5').hide();
  }
);
$( '#porty6' ).hover(
  function() {
    $('#txt6').show();
  }
  , function() {
    $('#txt6').hide();
  }
);
$( '#porty7' ).hover(
  function() {
    $('#txt7').show();
  }
  , function() {
    $('#txt7').hide();
  }
);
$( '#porty8' ).hover(
  function() {
    $('#txt8').show();
  }
  , function() {
    $('#txt8').hide();
  }
);
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
