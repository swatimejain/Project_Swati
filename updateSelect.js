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
});