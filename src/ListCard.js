import React, {Component} from 'react'; 

class ListCard extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	render() {
		const {todo} = this.props;
		return (
			<div className="p-2 bg bg-dark col-4">
				<div className="card p-2 card-light">
					<p>
						{todo.title}
					{ todo.completed ?
					<label className="text text-primary"> Completed </label>
					: 
					<label className="text text-warning"> - Not completed - </label>
					}
					</p>
					<button>Change Status</button>
				</div>
			</div>
		)
	}
}

export default ListCard;