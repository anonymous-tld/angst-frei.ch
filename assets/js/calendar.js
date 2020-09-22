document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prevYear,prev,next,nextYear'
    },
    events:'/event-data',
    themeSystem: 'bootstrap',
    initialView: 'listWeek'
  });
  calendar.render();
});
