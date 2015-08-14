$(document).ready(function () {
    "use strict";

    var selectData, $states;

    function updateSelects() {
        var cities = $.map(selectData[this.value], function (city) {
            return $("<option />").text(city);
        });
        $("#city_names").empty().append(cities);
    }

    $.getJSON("updateSelect.json", function (data) {
        var state;
        selectData = data;
        $states = $("#us_states").on("change", updateSelects);
        for (state in selectData) {
            $("<option />").text(state).appendTo($states);
        }
        $states.change();
    });
	
	$("button").click(function(){
	$.getJSON('hotel.json', function (data) {
		
		
		if((document.getElementById("us_states").value == 'jaipur')&&(document.getElementById("city_names").value == 'amer')){
		var output = '<p>';
		$.each(data.amer, function (key, val) {
			output +=  val.hotelname +  '<br>Click down for more details<br>'  + '<a href=" '+ val.url + ' ">'+  val.url + '</a>';
				
		output += '</p>';
		$('#hotel').html(output); 
		});
			// replace all existing content
		}
		
		if((document.getElementById("us_states").value == 'jaipur')&&(document.getElementById("city_names").value == 'miroad')){
		var output = '<p>';
		$.each(data.miroad, function (key, val) {
			output += val.hotelname +  '<br>Click down for more details<br>'  + '<a href=" '+ val.url + ' ">'+  val.url + '</a>';
				
		output += '</p>';
		$('#hotel').html(output); 
		});
			// replace all existing content
		}
		
		
		if((document.getElementById("us_states").value == 'bangalore')&&(document.getElementById("city_names").value == 'marathahalli')){
		var output = '<p>';
		$.each(data.marathahalli, function (key, val) {
			output +=   val.hotelname +  '<br>Click down for more details<br>'  + '<a href=" '+ val.url + ' ">'+  val.url + '</a>' ;
				
		output += '</p>';
		$('#hotel').html(output); 
		});
			// replace all existing content
		}
		
		
		
		if((document.getElementById("us_states").value == 'bangalore')&&(document.getElementById("city_names").value == 'hsr')){
		var output = '<p>';
		$.each(data.hsr, function (key, val) {
			output += val.hotelname +  '<br>Click down for more details<br>'  + '<a href=" '+ val.url + ' ">'+  val.url + '</a>' ;
				
		output += '</p>';
		$('#hotel').html(output); 
		});
			// replace all existing content
		}
		
		
		
		if((document.getElementById("us_states").value == 'delhi')&&(document.getElementById("city_names").value == 'vasantvihar')){
		var output = '<p>';
		$.each(data.vasantvihar, function (key, val) {
			output +=  val.hotelname +  '<br>Click down for more details<br>'  + '<a href=" '+ val.url + ' ">'+  val.url + '</a>';
				
		output += '</p>';
		$('#hotel').html(output); 
		});
			// replace all existing content
		}
		
		
		
		
		
		
		});
	});

});




