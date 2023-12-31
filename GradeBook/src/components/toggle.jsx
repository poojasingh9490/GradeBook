import React, { useState } from 'react';
import './toggle.css';

function ToggleButton({ showStatistics, setShowStatistics }) {
  const [toggleOn, setToggleOn] = useState(showStatistics);

  const handleToggle = () => {
    const newValue = !toggleOn;
    setToggleOn(newValue);
    setShowStatistics(newValue);
  };

  return (
    <div id='dem'>
      <h2>Show Statistics:</h2>
      <label className="toggle-button">
        <input
          type="checkbox"
          checked={toggleOn}
          onChange={handleToggle}
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
