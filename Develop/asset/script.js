//i open planner
// the current day is displayed at the top of calendar
// when scroll doen presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
 // click button save button for the block the textfor the event is savedin local storage
 // i refresh page and events stay on page
 var today = moment();
 $("#currentDay").text(today.format("MMM Do, YYYY"));