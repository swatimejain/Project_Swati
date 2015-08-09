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
		var output = '<ul>';
		
		
		$.each(data.banipark, function (key, val) {
			output +=  '<li>' + val.hotelname +  '<br>Click down for more details<br>'  + '<a href=" '+ val.url + ' ">'+  val.url + '</a>' +'</li>';
		});
		output += '</ul>';
		$('#hotel').html(output); 	// replace all existing content
		

		
	});
	
	});
	
	
});

