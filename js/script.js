$(document).ready(function() {

  for (var i = 0; i < 35; i++) {
    var box = $('.template .box').clone();
    $('.container').append(box);
  }

  $(document).on('click', '.box', function() {

    var selection = $(this);

    $.ajax( {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, state) {
        console.log(data);
        var number = data.response;
        selection.append(number);
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
