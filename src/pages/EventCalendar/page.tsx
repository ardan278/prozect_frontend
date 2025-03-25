import React from "react";

const EventCalendar: React.FC = () => {
  return (
    <div className="flex justify-center p-4">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&src=ZW4tZ2IudXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default EventCalendar;
