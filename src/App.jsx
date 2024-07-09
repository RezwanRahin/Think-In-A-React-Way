import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";

// function App() {
//   return (
//     <div className="app">
//       <Counter>
//         {(counter, incrementCount) => <ClickCounter count={counter} incrementCount={incrementCount} />}
//       </Counter>

//       <Section />
//     </div>
//   );
// }

class App extends React.Component {
  state = { theme: 'dark' };

  render() {
    const { theme } = this.state;

    return (
      <div className="app">
        <Counter>
          {(counter, incrementCount) => <ClickCounter count={counter} incrementCount={incrementCount} />}
        </Counter>

        <Section theme={theme} />
      </div>
    );
  }
}

export default App;
