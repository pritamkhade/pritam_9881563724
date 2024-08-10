

import React from 'react';
import Tooltip from './Tooltip';

const getColorForSentiment = (sentiment) => {
  switch (sentiment) {
    case 'Positive':
      return 'green';
    case 'Negative':
      return 'red';
    default:
      return 'black';
  }
};

const ReviewHighlighter = ({ review }) => {
  const { raw_content, highlight_indices = [] } = review;

  const getHighlightedText = () => {
    let lastIndex = 0;
    const highlightedText = [];

    // Check if highlight_indices is an array and has elements
    if (Array.isArray(highlight_indices) && highlight_indices.length > 0) {
      highlight_indices.forEach(([start, end, sentiment], index) => {
        if (start > lastIndex) {
          highlightedText.push(
            <span key={`text-${index}`}>{raw_content.slice(lastIndex, start)}</span>
          );
        }
        highlightedText.push(
          <Tooltip key={`highlight-${index}`} text={raw_content.slice(start, end)} sentiment={sentiment} />
        );
        lastIndex = end;
      });

      // Add any remaining text after the last highlighted section
      highlightedText.push(
        <span key={`text-end`}>{raw_content.slice(lastIndex)}</span>
      );
    } else {
      // If no highlights, return the entire raw content as is
      highlightedText.push(<span key="full-text">{raw_content}</span>);
    }

    return highlightedText;
  };

  return <p>{getHighlightedText()}</p>;
};

export default ReviewHighlighter;
