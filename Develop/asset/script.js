//i open planner
// the current day is displayed at the top of calendar
// when scroll down presented with blocks for standard buisness hours
// i view the time blocks for standard buisness hours
//each time block is color coded to indicate whether it is in the past present future
//click block can enter event
// click button save button for the block the textfor the event is savedin local storage
// i refresh page and events stay on page

const addTime = document.querySelector(".addstime");
const repeatSection = document.querySelector(".input");

let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

const workTime = [
  "8 a.m.",
  "9 a.m.",
  "10 a.m.",
  "11 a.m.",
  "12 p.m.",
  "1 p.m.",
  "2 p.m.",
  "3 p.m.",
  "4 p.m.",
  "5 p.m.",
];
// uses arrow function to set items for the times
const Item = (time) => `
<div class="input d-flex ">
<label class="addstime d-flex <div class="d-flex ">
${time}</label>
<input class="flex-fill" type="textarea" id="label" maxlength="100%" />
<button class='button' id='btn'>Save</button>
</div>   
`;
//adds items through html starting with my array for work time and using map method to place the html code for every time avaibable
$(".list-items").html(workTime.map(Item).join(""));

let btnDsn = document.querySelector("#label");
localStorage.setItem('click','label');
let name = localStorage.getItem('Name');
  
(function (){
    btnDsn.onclick = function() {
        btnDsn.textContent =  label;
    };
})();