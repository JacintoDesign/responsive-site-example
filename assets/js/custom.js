$(document).ready(function(){
  $('#play-button').on('click', function(){
    $('#splash-img, .video').toggle();
  })

  $.ajax({
    url: 'https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) { 
      var carData = '';
      $(data[0]).each(function(){        
        $('#list-1').append('<h3 class="sub-title model-title underline">'+this.Name+'</h3>')
        $('#list-1').append('<h3 class="sub-title">'+this.Price+'</h3>')
        $('#list-1').append('<img class="alt-img" src="'+this.Photo+'">')
        $('#list-1').append('<table><tbody>')
        $('#list-1').append('<tr><th>Retailer:</th><td>'+this.Retailer+'</td>')
        $('#list-1').append('<tr><th>Kilometres:</th><td>'+this.Kilometres+'</td>')
        $('#list-1').append('<tr><th>Transmission:</th><td>'+this.Transmission+'</td>')
        $('#list-1').append('<tr><th>Exterior:</th><td>'+this.Exterior+'</td>')
        $('#list-1').append('<tr><th>Interior:</th><td>'+this.Interior+'</td>')
        $('#list-1').append('<tr><th>VIN:</th><td>'+this.VIN+'</td>')
        $('#list-1').append('<tr><th>Drive Train:</th><td>'+this.DriveTrain+'</td>')
        $('#list-1').append('</tbody></table>')        
      });
      $('#list-1').append(carData);
    }
  });

  $.ajax({
    url: 'https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) { 
      var carData = '';
      $(data[1]).each(function(){        
        $('#list-2').append('<h3 class="sub-title model-title underline">'+this.Name+'</h3>')
        $('#list-2').append('<h3 class="sub-title">'+this.Price+'</h3>')
        $('#list-2').append('<img class="alt-img" src="'+this.Photo+'">')
        $('#list-2').append('<table><tbody>')
        $('#list-2').append('<tr><th>Retailer:</th><td>'+this.Retailer+'</td>')
        $('#list-2').append('<tr><th>Kilometres:</th><td>'+this.Kilometres+'</td>')
        $('#list-2').append('<tr><th>Transmission:</th><td>'+this.Transmission+'</td>')
        $('#list-2').append('<tr><th>Exterior:</th><td>'+this.Exterior+'</td>')
        $('#list-2').append('<tr><th>Interior:</th><td>'+this.Interior+'</td>')
        $('#list-2').append('<tr><th>VIN:</th><td>'+this.VIN+'</td>')
        $('#list-2').append('<tr><th>Drive Train:</th><td>'+this.DriveTrain+'</td>')
        $('#list-2').append('</tbody></table>')
      });
      $('#list-2').append(carData);
    }
  });
}); 
