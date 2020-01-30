$(document).ready(function() {

  $(document).on('click', '.box', function() {

    var selection = $(this);

    $.ajax( {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, state) {
        console.log(data);
        var number = data.response;
        if (number <= 5) {
          selection.addClass('yellow');
        } else {
          selection.addClass('green');
        }
      },
      error: function (request, state, error) {
        console.log(state, error);
      } }
    );

  });

});
