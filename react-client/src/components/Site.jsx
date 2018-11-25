import React from 'react';
import $ from 'jquery';

class Site extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
		image: "",
  		name: "",
  		description: "",
  		birthday: ""
		};
	}
	onRender() {
		$.ajax({
      		url: '/site',
      		type: 'GET',
      		success: function(data){
        		console.log("loooooolx5" ,data)
        		this.setState({
        			image: data[data.length -1].image,
        			name: data[data.length -1].name,
        			description: data[data.length -1].description,
        			birthday: data[data.length -1].birthday
        		})}
      		},
      		error: function( jqXhr, textStatus, errorThrown ){
        		console.log( errorThrown );
      		}
    	})
	}

	render() {
		return (
			<img src={this.state.image} />
			<h1>{this.state.name}</h1>
			<p>{this.state.description}</p>
			<p>{this.state.birthday}</p>

			)
	}
}

export default Site;

