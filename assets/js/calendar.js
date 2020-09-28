document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      start: 'title', // will normally be on the left. if RTL, will be on the right
      center: '',
      end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
    },
    footerToolbar: {
      left: 'listWeek,dayGridMonth,timeGridDay',
      right: 'addButton'
    },
    customButtons: {
      addButton: {
        text: 'Neuer Termin',
        click: function() {
          window.open("https://demo.terminkalender.top/add/");
        }
      }
    },
    events:'/event-data',
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate
      if (info.event.url) {
        window.open(info.event.url);
      }
    },
    navLinks: true,
    locale: 'de',
    themeSystem: 'bootstrap',
    initialView: 'listWeek',
    dayMaxEvents: 5,
    firstDay: 1,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    eventClassNames: function(arg) {
      return [ arg.event.extendedProps.country.toLowerCase() + "-flag" ]
    }
  });
  calendar.render();
});
