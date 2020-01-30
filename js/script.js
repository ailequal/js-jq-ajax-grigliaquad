$(document).ready(function() {

  $.ajax( {
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data, state) {
      console.log(data, state);
    },
    error: function (request, state, error) {
      console.log(state, error);
    } }
  );

});
