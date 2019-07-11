import React from 'react';
import Nav from '/Nav'; // imports index.js from Nav folder
// import './App.css';

class App extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<Nav />
			</div>
		);
	}
}

export default App;
