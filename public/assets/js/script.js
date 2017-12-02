/**
 * Executes when you click the submit button.
 */
$('#SubmButton').on('click', () => {

  let inputData = $('#inputTxtArea').val();

  $.ajax("/submitBurger", {
    type: "POST",
    dataType: "json",
    data: {
      'val1': inputData
    }
  }).then(
    function (data) {
      console.log(data);
      location.reload();
    });

});
/**
 * Executes when you click on any of the devour button.
 */
$('.bDivs').on('click', '.devourBtn', function () {

  let bClicked = $(this).attr('id');

  $.ajax("/devourBurger", {
    type: "PUT",
    dataType: "json",
    data: {
      'btnID': bClicked
    }
  }).then(
    function () {
      location.reload();
    });
});