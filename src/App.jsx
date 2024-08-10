  // src/App.js

  import React from 'react';
  import './App.css';
  import ReviewList from './components/ReviewList';
  import reviewsData from './data/reviewsData.json';

  function App() {
    return (
      <div className="App">
        <h1>Review Sentiment Analysis</h1>
        <ReviewList reviews={reviewsData} />
      </div>
    );
  }

  export default App;
