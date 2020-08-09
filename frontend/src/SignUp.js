import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '' ,
            firstName: '',
            lastname : '',
            email : '',
            password : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username );
        event.preventDefault();
        this.setState({
            username : '' ,
            firstName: '',
            lastName : '',
            email : '',
            password : ''
        });
      }
    render() {
        return (
            <div>
                <h3>Create Account!!!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Username : 
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                    </label>
                    <br/> 
                    <label>
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Last Name:
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Email:
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUp
