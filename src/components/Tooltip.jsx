// src/components/Tooltip.js

import React, { useState } from 'react';

const Tooltip = ({ text, sentiment }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const color = sentiment === 'Positive' ? 'green' : 'red';

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ backgroundColor: color }}
    >
      {text}
      {showTooltip && (
        <div className="tooltip">
          Sentiment: {sentiment}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
