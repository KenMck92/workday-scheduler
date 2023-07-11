// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // var saveButton = $('.btn')
  // saveButton.on('click', function() {
  //   var txtArea = $('textarea')
  //   localStorage.setItem("Text", txtArea.val());

  $('.btn').on('click', function () {
    var keyTime = $(this).parent().attr('id').split('-')[1];
    var txtValue = $(this).parent().find('.description').val();
    localStorage.setItem(keyTime, txtValue);
  })


  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  var currentHr = dayjs().format('HH');
  $(".time-block").each(function () {
  var displayHr = $(this).attr('id').split('-')[1];
  
  if (displayHr < currentHr) {
    $(this).find('.description').addClass('past');
  } else if (displayHr === currentHr) {
    $(this).find('.description').addClass('present');
  } else {
    $(this).find('.description').addClass('future');
  }

  var textEntry = localStorage.getItem(displayHr);
  var textArea = $(this).find('.description');
  textArea.val(textEntry);

})
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set


  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentDate = dayjs().format('dddd, MMMM D');
  $('.currentDate').text(currentDate);
});