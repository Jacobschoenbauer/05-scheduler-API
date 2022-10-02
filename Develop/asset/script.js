//i open planner
// the current day is displayed at the top of calendar
// when scroll down presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
// click button save button for the block the textfor the event is savedin local storage
// i refresh page and events stay on page

//adds the date to the top of the screen
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready(function () {
  // set click function to save text to local storage
  $(".button").on("click", function () {
    // Get  values of the thingsTodo in JQuery
    var text = $(this).siblings(".thingstodo").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage

    localStorage.setItem(time, text);
  });
  function timeTracker() {
    //get current the time and turns them into numbers so the id can be read from the number hour block
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var cycleTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      // a if else statement saying if its past present or future it shoud display that color
      // with the removeclass it takes away the class and the add class option put the class in
      if (cycleTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (cycleTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  
  }
  $("#hour7 .thingTodo").val(localStorage.getItem("hour7"));
  $("#hour8 .thingTodo").val(localStorage.getItem("hour8"));
  $("#hour9 .thingsTodo").val(localStorage.getItem("hour9"));
  $("#hour10 .thingsTodo").val(localStorage.getItem("hour10"));
  $("#hour11 .thingsTodo").val(localStorage.getItem("hour11"));
  $("#hour12 .thingsTodo").val(localStorage.getItem("hour12"));
  $("#hour13 .thingsTodo").val(localStorage.getItem("hour13"));
  $("#hour14 .thingsTodo").val(localStorage.getItem("hour14"));
  $("#hour15 .thingsTodo").val(localStorage.getItem("hour15"));
  $("#hour16 .thingsTodo").val(localStorage.getItem("hour16"));
  $("#hour17 .thingsTodo").val(localStorage.getItem("hour17"));
  timeTracker();
});


