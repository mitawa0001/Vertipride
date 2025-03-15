
import React from 'react';
import "../css/style.css";

const CalendlyWidget = () => {

  const handleButtonClick = () => {
    window.Calendly.initPopupWidget({url: 'https://calendly.com/vertipride/meeting'});
    return false;
  };

  return (
    <div>   
      <a href="#" onClick={handleButtonClick}>Setup a meeting for free</a>
    </div>
  );
};

export default CalendlyWidget;

