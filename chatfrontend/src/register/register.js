import React,{ Component } from 'react'
import "./register.scss";
import { Link } from "react-router-dom";
import socket from 'socket.io'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	// this.handleSubmit = this.handleSubmit.bind(this)
}


// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}


// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
   const sendData = () => {
      const { name, address } = this.state
      socket.$emit("joinRoom", { name, address });
   }

	return(
	<form onSubmit={this.handleSubmit} className="registerpage">
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name</label>
		<input
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address</label>
		<input
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
      <div>
		<label htmlFor='highSchool'>High School</label>
		<input
			name='highSchool'
			placeholder='High School'
			value={this.state.highSchool}
			onChange={this.handleChange}
		/>
		</div>
      <div>
		<label htmlFor='className'>Class Name</label>
		<input
			name='className'
			placeholder='Class Name'
			value={this.state.className}
			onChange={this.handleChange}
		/>
		</div>
      <div>
		<label htmlFor='year'>Year</label>
		<input
			name='year'
			placeholder='Year'
			value={this.state.year}
			onChange={this.handleChange}
		/>
		</div>
		<div>
      <Link to={`/chat/${this.state.address}/${this.state.name}`}>
      {/* <Link to={`/chat/8zhong-class33-year2009/liangwen`}> */}
		<button onClick={sendData}>Create Account</button>
		</Link>
      </div>
	</form>
	)
}
}

export default Form
