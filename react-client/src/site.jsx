import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Site.jsx';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render () {
    return (<div>
      <Site />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('siteapp'));