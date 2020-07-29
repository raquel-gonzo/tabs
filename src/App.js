import React from 'react';
import './App.css';
import Display from './components/Display';
import Tab from './components/Tab';

function App() {

  const tabs = [{
    label: 'tab1',
    content: 'tab 1 content'
  },
  {
    label: 'tab2',
    content: 'tab2 content'
  },
  {
    label: 'tab3',
    content: 'tab3 content'
  }

];

  return (
    <div className="App">
      <Tab tabs={tabs}></Tab>
      <Display></Display>
    </div>
  );
}

export default App;
