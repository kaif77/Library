import React from 'react';
import Client from "./Client";
import ReadingArea from "./components/ReadingArea";
import './App.scss';

const App: React.FC =() => {
  return (
      <div>
        <Client/>
        <ReadingArea/>
      </div>

  );
};

export default App;