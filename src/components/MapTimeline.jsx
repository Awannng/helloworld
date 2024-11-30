import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Timeline from 'react-image-timeline';
import 'react-image-timeline/dist/timeline.css';

const events = [
  {
      date: new Date(2013, 9, 27),
      text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
      title: "Cairo, Egypt",
      buttonText: 'Click Me',
      imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
      onClick: console.log,
  }
];

const MapTimeline = () => {
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
};

export default MapTimeline;
