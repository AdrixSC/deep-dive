import React from 'react';

//Styles
import './App.css';

//Components
import Header from './components/Header';
import View from './components/View';


function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">
        <View />
      </body>
    </div>
  );
}

export default App;
