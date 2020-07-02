import React from 'react';

class App extends React.Component{
	state = {
		loading: false,
		list: null,
	};

	async componentDidMount(){
		const url = "http://opentable.herokuapp.com/api/restaurants?country=CA";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({list: data.restaurants, loading: false});
		console.log(data);
	}
	render(){

		if(this.state.loading || !this.state.list ){
			return <div> Loading... </div>
		}else{
			return(
				
				<div className="App">
	                <ul>
						{ 
						    Object.keys(this.state.list[0]).map((id) => (
						        <li key={id}></li>
						    ))

						}  	            
				    </ul>	               
				</div>

			);


		}

	}
}

export default App;