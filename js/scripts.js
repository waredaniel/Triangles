$(document).ready(function() {
  $("form#identifier").submit(function(event) {
    event.preventDefault();
    const inputSide1 = parseInt($("#side1").val());
    const inputSide2 = parseInt($("#side2").val());
    const inputSide3 = parseInt($("#side3").val());

    if(inputSide1 === inputSide2 && inputSide2 === inputSide3){
      $('#equilateral').show();
    }
    if(inputSide1 === inputSide2 && !inputSide3 ){
      $('#isosceles').show();
    }
    });


  });