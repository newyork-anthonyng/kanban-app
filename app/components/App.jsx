import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

const notes = [

];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};
	}

	addNotes = () => {
		const newNotes = this.state.notes.concat([{
			id: uuid.v4(),
			task: 'New task'
		}]);

		this.setState({notes: newNotes});
	}

	render() {
		const {notes} = this.state;
		return (
			<div>
				<button onClick={this.addNotes}>+</button>
				<Notes notes={notes} />
			</div>
		);
	}
}
