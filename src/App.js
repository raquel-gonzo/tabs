import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Tab from './components/Tab';

function App() {

  const [shownContent, setShownContent] = useState(0);

  const tabs = [{
    label: 'tab1',
    content: 'tab 1 content'
  },
  {
    label: 'tab2',
    content: 'tab 2 content'
  },
  {
    label: 'tab3',
    content: 'tab 3 content'
  }
  ];

  function handleClick(index) {
    console.log(index);
    setShownContent(index);
  }
  
  return (
    <div className="App">
      <Tab handleClick={handleClick} tabs={tabs}></Tab>
      <Display shownContent={shownContent} tabs={tabs}></Display>
    </div>
  );
}

export default App;