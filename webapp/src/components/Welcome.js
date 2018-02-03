import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addItem } from '../actions';

class Welcome extends Component {

  render() {
    return <Button onClick={ () => this.props.addItem() } bsStyle="primary">Add Item</Button>;
  }
}

export default connect(null, { addItem })(Welcome);
