import { useState } from "react";
import MyComponent from "./components/MyComponentClass";

function App() {
	const [show, setShow] = useState(true);

	return (
		<div className="app">
			<div>{show && <MyComponent />}</div>
			<p>
				<button type="button" onClick={() => setShow((prevState) => !prevState)}>
					{show ? 'Hide post' : 'Show post'}
				</button>
			</p>
		</div>
	);
}

export default App
