import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('Kossie');
  const [name, setName] = useState('Name');

  const updateText = () => {
    setText('Coder');
  };

  useEffect(() => {
    console.log('always', name)
    document.title = name;
  });

  useEffect(() => {
    console.log('name updated')
  }, []);
  return (
    <div className="App">
      {text} <br />
      <button onClick={updateText}>Update</button><br />
      {name} <br />
      <button onClick={() => setName('Name Updated')}>Update</button>
    </div>
  );
}

export default App;
