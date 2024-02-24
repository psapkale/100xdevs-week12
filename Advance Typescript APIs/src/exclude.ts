type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<EventType, 'scroll'>; //

const handleEvent = (event: ExcludeEvent) => {
   console.log(`Handling event: ${event}`);
};

handleEvent('click'); // ok
// handleEvent('scroll'); // Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.
