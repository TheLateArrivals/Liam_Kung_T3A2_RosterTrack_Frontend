import React from 'react';
import FullCalendar, { EventClickArg, EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const Scheduler = ({ staffList }) => {
  let calendarRef = React.createRef();

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Enter staff member name and room:');
    if (title) {
      let calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        extendedProps: {
          isHovered: false,
        },
      });
    }
  };

  const handleEventMouseEnter = (mouseEnterInfo) => {
    mouseEnterInfo.event.setExtendedProp('isHovered', true);
  };

  const handleEventMouseLeave = (mouseLeaveInfo) => {
    mouseLeaveInfo.event.setExtendedProp('isHovered', false);
  };

  const handleEventClick = (clickInfo) => {
    if (clickInfo.jsEvent.target.classList.contains('delete-button')) {
      clickInfo.event.remove();
    }
  };

  const renderEventContent = (eventContent) => {
    return (
      <>
        <div className='event-content'>
          <div className='event-title'>{eventContent.event.title}</div>
          {eventContent.event.extendedProps.isHovered && (
            <div className='delete-button'>Delete</div>
          )}
        </div>
      </>
    );
  };

  return (
    <div>
      <h2>Scheduler</h2>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        initialView='dayGridMonth'
        slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
        eventTimeFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
        selectable={true}
        select={handleDateSelect}
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
    </div>
  );
};

let eventGuid = 0;
const createEventId = () => {
  return String(eventGuid++);
}

export default Scheduler;
