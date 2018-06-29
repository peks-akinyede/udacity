

$(document).ready(function(){
  var table = $('#pixelCanvas');
  var submitButton = $('input[type="submit"]');

  // When size is submitted by the user, call makeGrid()
  submitButton.on('click', function (e) {
    e.preventDefault();
    makeGrid();
  });

  //When cell is clicked, set it to the chosen color
  table.on('click', "td", function(){
    var color = $('#colorPicker').val();
    var tableBackgroundColor = table.attr('bgcolor');

    //Changes cell color to default color if there are two clicks
    //Using the same color. Results in a color on/off like feature
    if($(this).attr('bgcolor')===color){
      $(this).attr("bgcolor", tableBackgroundColor);
    }else{
      $(this).attr("bgcolor", color);
    }
  });


  function makeGrid() {
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    //Allows to reset the table
    $('tbody').remove();

    //Add extra styling with jQuery
    table.css('margin-bottom','16px');
    table.attr('bgcolor','white');

    //Building the 'table' tree
    table.append('<tbody></tbody>');
    let tableBody = table.find('tbody');

    //Make 'height' number of rows
    for(let i =0; i<height;i++){
      tableBody.append('<tr></tr>');
    }

    //Make 'width' number of columns
    tableBody.find('tr').each(function(){
      for(let j=0;j<width;j++){
        $(this).append('<td></td>');
      }
    });
    // Your code goes here!
  }

});
