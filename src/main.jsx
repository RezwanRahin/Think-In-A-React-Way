// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

let states = [];  // [0: [value, setter], 1: [value, setter]]
let stateIndex = -1;

function useState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) {
    return states[index];
  }

  const setValue = (newValue) => {
    states[index][0] = newValue;
    renderWithRezwan();
  }

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;

  return returnArray;
}

function App() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : null;

    setTodo(inputValue);
    setWarning(updatedWarning);
  }

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h2>{warning || 'Good Choice!'}</h2>
    </div>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

function renderWithRezwan() {
  stateIndex = -1;
  rootElement.render(
    <App />
  )
}

renderWithRezwan();

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
// )
