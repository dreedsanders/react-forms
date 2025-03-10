import React from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  
    handlehange = event => {
      event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
    render() {
        return (
        <div>
            <Form
                formData={this.state}
                handleChange={this.handleChange}
            />
            <DisplayData formData={this.state} />
        </div>
    )
  }
}

export default ParentComponent;