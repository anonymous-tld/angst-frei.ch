document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'dayGridMonth,timeGridDay',
      center: 'title',
      right: 'prev,next'
    },
    events:'/event-data',
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate
      if (info.event.url) {
        window.open(info.event.url);
      }
    },
    firstDay: 1,
    themeSystem: 'bootstrap',
    initialView: 'listWeek',
    dayMaxEvents: 5,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
  });
  calendar.render();
});
