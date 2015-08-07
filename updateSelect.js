
$(document).ready(function () {
    "use strict";

    var selectData, $localres;

    function updateSelects() {
        var cities = $.map(selectData[this.value], function (city) {
            return $("<option />").text(city);
        });
        $("#locality").empty().append(cities);
    }

    $.getJSON("updateSelect.json", function (data) {
        var city;
        selectData = data;
        $localres = $("#city").on("change", updateSelects);
        for (city in selectData) {
            $("<option />").text(city).appendTo($localres);
        }
        $localres.change();
    });
});

