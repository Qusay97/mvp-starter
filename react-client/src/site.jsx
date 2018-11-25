import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Site.jsx';

class SiteApp extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render () {
    return (<div>
      <Site />
    </div>)
  }
}

ReactDOM.render(<SiteApp />, document.getElementById('siteapp'));