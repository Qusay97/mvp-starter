import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render () {
    return (<div>
      <Form />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


// import List from './components/List.jsx';
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     {value: ''}
  //   }
  // }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }