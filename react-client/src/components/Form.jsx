import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Form extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
		image: "",
  		name: "",
  		description: "",
  		birthday: ""
		};
  	};
	

  	onSubmit(e) {
  		console.log("hi",e)
  		// debugger;
  	  $.ajax({
      url: '/site',
      type: 'POST',
      // dataType: 'json',
      // contentType: 'application/json',
      data: e,
      success: function(data){
        console.log(data)
      },
      error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
      }
    })
  	};

	render() {
		return (
			<div>
			<form>
				<input placeholder='Image here' value={this.state.image}
				 onChange={e => this.setState({image: e.target.value})} />
				<input placeholder='Name here' value={this.state.name}
				onChange={e => this.setState({name: e.target.value})} />
				<input placeholder='Description here' value={this.state.description}
				onChange={e => this.setState({description: e.target.value})} />
				<input placeholder='Birthday' value={this.state.birthday}
				onChange={e => this.setState({birthday: e.target.value})} />
				<button onClick={() => this.onSubmit(this.state)}>Make Me</button>
			</form>
				<img src={this.state.image} />
				<h1>{this.state.name}</h1>
				<p>{this.state.description}</p>
				<p>{this.state.birthday}</p>
			</div>
		);
	};
}



export default Form;






// constructor(props) {
//     super(props);
//     this.