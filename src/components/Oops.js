import React from 'react';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			items: {},
			isLoaded: false,
		}
	}

	componentDidMount(){

		fetch('http://opentable.herokuapp.com/api/restaurants?country=CA')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			})
		});
	}	
	render(){

		var {isLoaded, items} = this.state;
		var restaurant = items.restaurants;

		if(!isLoaded){
			return <div> Loading... </div>
		}else{
			return(
				
				<div className="App">
	                <ul>
						{ 
						    Object.keys(items).map((item) => (
						        <li key={item}>
						        key: {item} Name: {items[restaurant]}
						        </li>
						    ))

						}  
	                </ul>
				</div>

			);


		}

	}
}

export default App;