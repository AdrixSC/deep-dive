import React from 'react';

//Components
import Header from './components/Header';
import View from './components/View';

//Styles
import './App.css';


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
