"use client"


import React from 'react';

function ScrollToButton({ targetId, buttonText }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="btn btn-accent" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default ScrollToButton;

