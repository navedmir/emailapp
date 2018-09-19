import React, { Component } from 'react';

/* Import Components */

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmail: {
        from: '',
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        text: '',
      }

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleMultipleInput = this.handleMultipleInput.bind(this);
  }


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newEmail:
      {
        ...prevState.newEmail, [name]: value
      }
    }));
  }

  handleMultipleInput(e) {
    let val = e.target.value;
    let name = e.target.name;
    let multival;

    if (val && val !== '') {
      multival = val.split(',');
    }
    this.setState(prevState => ({
      newEmail:
      {
        ...prevState.newEmail, [name]: multival
      }
    }));
  }

  handleTextArea(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newEmail: {
        ...prevState.newEmail, text: value
      }
    }));
  }




  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newEmail;
    fetch('http://localhost:3000/sendEmail', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data => {
        document.getElementById('statusPanel').innerHTML = "Email Sent"
        console.log("Successful" + data);
      })
    })
  }

  handleClearForm(e) {

    e.preventDefault();
    this.setState({
      newEmail: {
        from: '',
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        text: ''
      },
    })
  }





  render() {
    return (

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <div id="statusPanel" style={{ "margin-left": '60%', color: 'red', font: '20px' }} >

        </div>
        <Input inputType={'text'}
          title={'From Email'}
          name={'from'}
          value={this.state.newEmail.from}
          placeholder={'Enter your email'}
          handleChange={this.handleInput}
          required
        /> {/* Email of the user */}

        <Input inputType={'text'}
          title={'To Email'}
          name={'to'}
          value={this.state.newEmail.to}
          placeholder={'Enter recipent email'}
          handleChange={this.handleMultipleInput}

        /> {/* Email of the receiver */}

        <Input inputType={'text'}
          title={'CC Email'}
          name={'cc'}
          value={this.state.newEmail.cc}
          placeholder={'Enter cc email'}
          handleChange={this.handleMultipleInput}

        /> {/* Email of the cc */}

        <Input inputType={'text'}
          title={'BCC Email'}
          name={'bcc'}
          value={this.state.newEmail.bcc}
          placeholder={'Enter bcc email'}
          handleChange={this.handleMultipleInput}

        /> {/* Email of the bcc */}

        <Input inputType={'text'}
          title={'Subject'}
          name={'subject'}
          value={this.state.newEmail.subject}
          placeholder={'Enter email subject '}
          handleChange={this.handleInput}

        /> {/* Email of the bcc */}



        <TextArea
          title={'Email Text'}
          rows={10}
          value={this.state.newEmail.text}
          name={'text'}
          handleChange={this.handleTextArea}
          placeholder={'Enter email text content'} />{/* Email text */}

        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Submit'}
          style={buttonStyle}
        /> { /*Submit */}

        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear'}
          style={buttonStyle}
        /> {/* Clear the form */}


      </form>

    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default FormContainer;