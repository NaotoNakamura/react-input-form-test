import './App.css';
import React from 'react';
import InputField from "./InputField";

function App() {
  const [text, setText] = React.useState('ここにテキスト');
  const [isEditing, setEditStatus] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setEditStatus(!isEditing)}>
        {isEditing ? '完了' : '編集'}
      </button>
      
      {isEditing ? 
        <InputField text={text} setText={setText}/> : 
        <div>{text}</div>
      }
    </div>
  );
}

export default App;
