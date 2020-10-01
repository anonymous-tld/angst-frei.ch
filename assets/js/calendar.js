document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      start: 'title', // will normally be on the left. if RTL, will be on the right
      center: '',
      end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
    },
    footerToolbar: {
      left: 'listWeek,dayGridMonth,dayGridDay',
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
    titleFormat: { year: 'numeric', month: 'numeric', day: 'numeric' },
    events:'/event-data',
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate
      console.log(info);
      if (info.event.url) {
        window.open(info.event.url);
      }
    },
    navLinks: true,
    locale: 'de',
    height: 'auto',
    themeSystem: 'standard',
    initialView: 'listWeek',
    views: {
      dayGridMonth: {
        dayMaxEvents: 5,
        firstDay: 1,
      }
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    eventDidMount: function(info) {
      var elemTitle = info.el.getElementsByClassName('fc-list-event-title')[0];
      if (elemTitle) {
        if (info.event.url) {
          elemTitle.innerHTML = '<a href="' + info.event.url + '">' + elemTitle.innerText + '&nbsp&nbsp<img src="https://demo.terminkalender.top/img/live.png" height="16px" style="vertical-align:middle"/></a>';
        } else {
          elemTitle.innerHTML = elemTitle.innerText;
        }
      }
      var elemDot = info.el.getElementsByClassName('fc-list-event-dot')[0];
      if (elemDot) {
         elemDot.outerHTML = '<img src="https://demo.terminkalender.top/img/' + info.event.extendedProps.country.toUpperCase() + '.png" height="16px" width="16px" style="vertical-align: top;"/>'
      }
    }
  });

  calendar.render();

});
