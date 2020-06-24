import React, {Component} from 'react'; 
import ListCard from './ListCard';

class List extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		todos: [],
	  	};
	}

	componentDidMount() {
	 	fetch('https://jsonplaceholder.typicode.com/todos')
		  .then(response => response.json())
		  .then(resp => {
		  		this.setState({todos: resp})
		  }) 
	}

	render() {
		const {todos} = this.state;
		return (
			<div>
				<h2>My TODOS</h2>
				<div className="row">
				{todos.map(todo => <ListCard key={todo.id} todo={todo} /> )}
				</div>
			</div>
		)
	}
}

export default List;