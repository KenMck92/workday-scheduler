
// TODO: Add a listener for click events on the save button. This code should
// created a jquery function to select ID and classes from HTML using (this) and logging it in my local storage. 
$(function () {
  $('.btn').on('click', function () {
    var time = $(this).parent().attr('id').split('-')[1];
    var value = $(this).parent().find('.description').val();
    localStorage.setItem(time, value);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // created variables to format the time displayed on the planner using Dayjs and which section of  the HTML to display it.
  var currentHour = dayjs().format('HH');
  $(".time-block").each(function () {
    var hourDis = $(this).attr('id').split('-')[1];

    if (hourDis < currentHour) {
      $(this).find('.description').addClass('past');
    } else if (hourDis === currentHour) {
      $(this).find('.description').addClass('present');
    } else {
      $(this).find('.description').addClass('future');
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // implemented jquery to show text entered in the planner times to show up in the local storage. 
    var txtEntry = localStorage.getItem(hourDis);
    var txtArea = $(this).find('.description');
    txtArea.val(txtEntry);

  })
  // TODO: Add code to display the current date in the header of the page.
// used Dayjs to show the current date when user visits to planner. 
  var currentDate = dayjs().format('dddd, MMMM D');
  $('.currentDate').text(currentDate);
});