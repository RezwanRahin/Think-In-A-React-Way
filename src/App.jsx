import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import ThemeContext from "./contexts/themeContext";

class App extends React.Component {
  state = { theme: 'light' };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === 'dark') {
        return { theme: 'light' };
      } else {
        return { theme: 'dark' };
      }
    });
  }

  render() {
    const { theme } = this.state;

    return (
      <div className="app">
        <Counter>
          {(counter, incrementCount) => <ClickCounter count={counter} incrementCount={incrementCount} />}
        </Counter>

        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
