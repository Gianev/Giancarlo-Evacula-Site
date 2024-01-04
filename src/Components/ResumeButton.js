import React from 'react';
import Resume from './images/GiancarloEvaculaResume.pdf';
const ResumeButton = () => {
  return (
    <a href={Resume} download="Resume">
      View Resume
    </a>
  );
};

export default ResumeButton;