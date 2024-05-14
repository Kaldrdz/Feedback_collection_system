import React from 'react';
import './App.css';
import FeedbackForm from './Feedbackform';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Zidio Development</h1>
        <h4>We value your feedback, Please complete the following form and help us improve our customer experience. </h4>
        <FeedbackForm />
      </header>
    </div>
  );
}

export default App;
