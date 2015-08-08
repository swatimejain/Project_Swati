


  var geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng)
}

function errorFunction(){
    alert("Geocoder failed");
}

  function initialize() {
    geocoder = new google.maps.Geocoder();
 }

  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      //console.log(results)
        if (results[1]) {
         //formatted address
        //alert(results[0].formatted_address)
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                    //this is the object you are looking for
                    city= results[0].address_components[i-1];
					
					
                    break;
                }
            }
        }
        //city data
       
document.getElementById("city1").innerHTML=city.long_name;

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
	  
    });
  }

/*
//local storage to store the selected city value of geo
  window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    document.getElementById('city1').addEventListener('change', function()  {
      // Get the value of the name field.
      var city1 = document.getElementById('city1').value;

      // Save the name in localStorage.
      localStorage.setItem('city1', city1);
	  
	  
	  
	  
  // Retrieve the users name.
 var names = localStorage.getItem('city1');

  if (names != "undefined" || names != "null") {
   document.getElementById('city1').innerHTML = "Hello " + names + "!";
 } else
   document.getElementById('city1').innerHTML = "Hello!";



    });

  }
  }
  
  //set cookie
   
           $(function() {
   
        // reading selected values from cookies
		 $("#city1").on("change", function() {
        
            var this$ = $(this);
            this$.onchange($.cookie(this$.attr('')));
        })
        // saving selected value in cookie
        .change(function() {
            var this$ = $(this);
            $.cookie(this$.attr('city1'), this$.val(), { expires: 7 });
        });
});
  */
  



  
  
  
  
  
  
  