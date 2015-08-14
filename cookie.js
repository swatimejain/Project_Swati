  $(document).ready(function(){
                $("button").click(function(){
                    var city1 = $('#city1').val();
              
                    $.cookie('city1', city1);
                  
                });
                checkCookieValues();
            });
            function checkCookieValues(){
                if ($.cookie('city1')!=="undefined") {
                    $('#city1').val($.cookie('city1'));
                }
              
            }