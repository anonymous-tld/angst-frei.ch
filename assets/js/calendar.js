document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'dayGridMonth,timeGridDay',
      center: 'title',
      right: 'prev,next'
    },
    events:'/event-data',
    themeSystem: 'bootstrap',
    initialView: 'listWeek',
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
  });
  calendar.render();
});
