// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function(){
  var table = $('#pixelCanvas');
  var submitButton = $('input[type="submit"]');
  var div = $('.view');

  submitButton.on('click', function (e) {
    e.preventDefault();
    makeGrid();
  });

  function makeGrid() {
    var height = $('#inputHeight').val();
    var weight = $('#inputWeight').val();
    $('tbody').remove();

    table.append('<tbody></tbody>');
    let tableBody = table.find('tbody');

    for(let i =0; i<height;i++){
      tableBody.append('<tr></tr>');
    }

    tableBody.find('tr').each(function(){
      for(let j=0;j<weight;j++){
        $(this).append('<td></td>');
      }
    });
    // Your code goes here!
  }

  table.on('click', "td", function(){
    var color = $('#colorPicker').val();
    var backgroundColor = div.css('background-color');
    
    if($(this).attr('bgcolor')===color){
      $(this).attr("bgcolor", backgroundColor);
    }else{
      $(this).attr("bgcolor", color);
    }
  });



});
