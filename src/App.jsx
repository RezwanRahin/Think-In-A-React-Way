import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="app">
      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <User name={() => "REZ"} /> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? "REZ" : "Guest"} /> */}

      {/* <Counter render={(counter, incrementCount) => <ClickCounter count={counter} incrementCount={incrementCount} />} />
      <Counter render={(counter, incrementCount) => <HoverCounter count={counter} incrementCount={incrementCount} />} /> */}

      <Counter>
        {(counter, incrementCount) => <ClickCounter count={counter} incrementCount={incrementCount} />}
      </Counter>
      <Counter>
        {(counter, incrementCount) => <HoverCounter count={counter} incrementCount={incrementCount} />}
      </Counter>
    </div>
  );
}

export default App;
