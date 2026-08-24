/*
* Class extending from Component that is used as an independent instance of each other.
* Extends from Component and can have a Constructor where the state declares what variables are at play with the class. 
*/

import React, { Component } from 'react';

const emp_id_label = "ID : ";
const emp_email_label = "E-Mail : ";
const emp_phone_label = "Phone : ";
const emp_password_label = "Password : ";

const emp_id_id = "emp_id";
const emp_email_id = "emp_email";
const emp_phone_id = "emp_phone";
const emp_password_id = "emp_password";

class EmployeeDetails extends Component {
    
    // Constructor from props for Component
    constructor(props) {
        super(props);
        // Declaration of State variables.
        this.state = { emp_id: '', emp_email: '', emp_phone: '', emp_password: '' };
    }

    // Event handler that updates the variables in the state with the data from the input fields.
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // New: handles form submission and sends data up to the parent
    handleSubmit = event => {
        event.preventDefault(); // stop the page reload

        // Call the function passed down from App.jsx, handing it this component's state
        if (this.props.onSubmitData) {
            this.props.onSubmitData(this.state);
        }
    };
    
    // Renders the Component
    render() {
        // Obtains the variables within the state
        const { emp_id, emp_email, emp_phone, emp_password } = this.state;

        // returns the following HTML to print out.
        return(
            // Make sure that the class name reflects the EmployeeDetails class and 
            <div className="EmployeeDetails">
                {/* Reflects the prop's name to confirm instance identity */}
                <h5>
                    {this.props.name}
                </h5>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor={emp_id_id}>{emp_id_label}</label>
                                    <input type="text" name={emp_id_id} id={emp_id_id} value={emp_id}
                                           onChange={this.handleInputChange} placeholder="Enter Employee ID"/>
                                </td>
                                <td>
                                    <strong>{emp_id}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor={emp_email_id}>{emp_email_label}</label>
                                    <input type="text" name={emp_email_id} id={emp_email_id} value={emp_email}
                                           onChange={this.handleInputChange} placeholder="Enter Employee Email"/>
                                </td>
                                <td>
                                    <strong>{emp_email}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor={emp_phone_id}>{emp_phone_label}</label>
                                    <input type="phone" name={emp_phone_id} id={emp_phone_id} value={emp_phone}
                                           onChange={this.handleInputChange} placeholder="Enter Employee Phone" />
                                </td>
                                <td>
                                    <strong>{emp_phone}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor={emp_password_id}>{emp_password_label}</label>
                                    <input type="password" name={emp_password_id} id={emp_password_id} 
                                           value={emp_password} onChange={this.handleInputChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit" className="counter">Save Employee</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
    
    componentDidMount() 
    {
        this.props.name = "MOUNTED CORRECTLY"
        this.props.emp_id = "Value updated after componentDidMount"
        this.setState({emp_id: this.props.emp_id})
    }
} export default EmployeeDetails;