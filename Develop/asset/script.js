//i open planner
// the current day is displayed at the top of calendar
// when scroll down presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
// click button save button for the block the textfor the event is savedin local storage
// i refresh page and events stay on page


let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready(function () {
  // set click function to save text to local storage
  $(".button").on("click", function () {
    // Get  values of the description in JQuery
    var text = $(this).siblings(".thingstodo").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage

    localStorage.setItem(time, text);
    
    
   
  
  });
  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".input").each(function () {
        var blockTime = parseInt($(this).attr("id").split("addtime")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
timeTracker()
});
