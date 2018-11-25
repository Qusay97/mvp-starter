import React from 'react';
import $ from 'jquery';
// import axios from 'axios';

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
  	// componentDidMount() {
  		// onSubmit2() {
  		// 	console.log("looool")

  		
  			// axios.get('/').then(data => this.setState({
     //    	image: data[data.length -1].image,
     //    	name: data[data.length -1].name,
     //    	description: data[data.length -1].description,
     //    	birthday: data[data.length -1].birthday
     //    }))
  		// }
  	// };

  	// onSubmit2() {
  	//   $.ajax({
   //    url: '/site',
   //    type: 'GET',
   //    success: function(data){
   //    	console.log(data)
   //      this.setState({
   //      	image: data[data.length -1].image,
   //      	name: data[data.length -1].name,
   //      	description: data[data.length -1].description,
   //      	birthday: data[data.length -1].birthday
   //      })
   //    },
   //    error: function( jqXhr, textStatus, errorThrown ){
   //      console.log( errorThrown );
   //    }
   //  })
  	// };
//<button onClick={() => this.onSubmit2()}>Show Me</button>
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
				<button onClick={() => this.onSubmit(this.state)}>Save Me</button>
				
			</form>
			</div>
		);
	};
}



export default Form;






// constructor(props) {
//     super(props);
//     this.