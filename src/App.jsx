import { useState } from "react";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

function App() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const incrementByOne = () => {
		setCount1((prevState) => prevState + 1);
	};

	const incrementByFive = () => {
		setCount2((prevState) => prevState + 5);
	};

	return (
		<div className="app">
			<Title />
			<ShowCount count={count1} title="Counter 1" />
			<Button handleClick={incrementByOne}>Increment by one</Button>
			<hr />
			<ShowCount count={count2} title="Counter 2" />
			<Button handleClick={incrementByFive}>Increment by five</Button>
		</div>
	);
}

export default App
