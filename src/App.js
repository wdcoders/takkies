import './App.css';

import Home from './components/Home';

function App() {

  const onMessageHandler = () => {
    console.log('Message Handler')
  }

  return (
    <div className="App">
      <Home onMessageHandler={onMessageHandler}/>
    </div>
  );
}

export default App;
