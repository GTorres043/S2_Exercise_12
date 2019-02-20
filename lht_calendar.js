"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Gabriel Torres
   Date:  2/19/19

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

//Set the date displayed in the caleneder
var thisDay = new Date("August 24, 2018");

//Write the calender to the element with the id "calender"
document.getElementById("calender").innerHTML = createCalender(thisDay);

//create the function to generate the calender table 

function createCalender(calDate) {
      var calenderHTML = "<table id='calender_table'>";
      calenderHTML += "</table>";
      return calenderHTML;
}

//function to write the calender caption
function calCaption(calDate)(
      //monthName array contains the list of month names
      var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];