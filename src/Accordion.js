import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div className={
        isActive ? 'accordion-content show' : 'accordion-content'
      }>
        <div className="tst">
        {content}
        </div>

      </div>
    </div>
  );
};
// "accordion-content no"
export default Accordion;


// {isActive && <div className="accordion-content">{content}</div>}