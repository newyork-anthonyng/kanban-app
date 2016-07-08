import LaneActions from '../actions/LaneActions';

export default class LaneStore {
	constructor() {
		this.bindActions(LaneActions);
		this.lanes = [];
	}

	create(lane) {
		lane.notes = lane.notes || [];

		this.setState({
			lanes: this.lanes.concat(lane)
		});
	}

	update(updatedLane) {
		const newLanes = this.lanes.map(lane => {
			if(lane.id === updatedLane.id) {
				return Object.assign({}, lane, updatedLane);
			}

			return lane;
		});

		this.setState({lanes: newLanes});
	}

	delete(id) {
		const newLanes = this.lanes.filter(lane => {
			return lane.id !== id;
		});

		this.setState({lanes: newLanes});
	}

	attachToLane({laneId, noteId}) {
		const newLanes = this.lanes.map(lane => {
			// remove the note from any existing lanes
			if(lane.notes.includes(noteId)) {
				lane.notes = lane.notes.filter(note => note !== noteId);
			}

			// add the note to target lane
			if(lane.id === laneId) {
				lane.notes = lane.notes.concat([noteId]);
			}

			return lane;
		});

		this.setState({lanes: newLanes});
	}

	detachFromLane({laneId, noteId}) {
		const newLanes = this.lanes.map(lane => {
			if(lane.id === laneId) {
				lane.notes = lane.notes.filter(note => note.id !== noteId);
			}

			return lane;
		});

		this.setState({lanes: newLanes});
	}
}
