import React from "react";
import Todo from "./components/TodoClass";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Todo />
			</div>
		);
	}
}

export default App
