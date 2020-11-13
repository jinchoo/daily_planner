function getCurrentDay() {
    var day = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
    let currentDay = document.querySelector('#currentDay')
    currentDay.innerHTML = day
};

getCurrentDay();



 var scheduledEvents = {};



$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  //console.log("userClickSaveBtn")
    var self = $(event.target);
    var textArea = $("#"+self.attr("data-text"));
    var hour = self.attr("data-text");
  
    scheduledEvents[hour] = textArea.val();
    saveToLocalStorage()
  });

  


   function saveToLocalStorage() {
   localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
 };
   function getEventsFromLocalStorage() {
        if (!localStorage.getItem('scheduledEvents')) {
     return;
  };
   scheduledEvents = JSON.parse(localStorage.getItem('scheduledEvents'));
 };

getEventsFromLocalStorage();


function pastPresentFuture() {
  hours = time.hours();
  $(".data-text").each(function () {
      var thisHour = parseInt($(this).attr("data-text"));

      if (thisHour > hour) {
          $(this).addClass("future")
      }
      else if (thisHour === hour) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("past");
      }
  })
}

