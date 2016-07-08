import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';

class App extends React.Component {
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

	deleteNote = (id, e) => {
		e.stopPropagation();

		const newNotes = this.state.notes.filter(note => note.id !== id);

		this.setState({notes: newNotes});
	}

	activateNoteEdit = (id) => {
		const newNotes = this.state.notes.map(note => {
			if(note.id === id) {
				note.editing = true;
			}

			return note;
		});

		this.setState({notes: newNotes});
	}

	editNote = (id, task) => {
		const newNotes = this.state.notes.map(note => {
			if(note.id === id) {
				note.editing = false;
				note.task = task;
			}

			return note;
		});

		this.setState({notes: newNotes});
	}

	render() {
		const {notes} = this.state;
		return (
			<div>
				{this.props.test}
				<button className="add-note" onClick={this.addNotes}>+</button>
				<Notes
					notes={notes}
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote} />
			</div>
		);
	}
}

export default connect(() => ({
	test: 'abc'
}))(App)
