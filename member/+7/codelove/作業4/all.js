/*4-1 textarea*/

// from a single Node
autosize(document.querySelector("textarea"));

// Init

let ta = document.querySelector("form");
ta.style.display = "none";
autosize(ta);

// // Change layout
ta.style.display = "block";
autosize.update(ta);

// // Change value
ta.value = "Some new value";
autosize.update(ta);

//4-5

$(document).ready(function () {
  $("#date_timepicker_start").datetimepicker({
    format: "Y/m/d",
    // onShow: function (ct) {
    //   this.setOptions({
    //     maxDate: $("#date_timepicker_end").val() ? jQuery("#date_timepicker_end").val() : false,
    //   });
    // },
    timepicker: false,
  });
  $("#date_timepicker_end").datetimepicker({
    format: "Y/m/d",
    // onShow: function (ct) {
    //   this.setOptions({
    //     minDate: $("#date_timepicker_start").val() ? jQuery("#date_timepicker_start").val() : false,
    //   });
    // },
    timepicker: false,
  });
});
