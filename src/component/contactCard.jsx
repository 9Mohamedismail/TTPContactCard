import React, { Component, ReactPropTypes } from "react";

class ContactCard extends Component {
   constructor(props) {
    super(props);
    this.state = { 
        contactName: 'Elaine Luzung',
        mobileNumber: '555-555-5555',
        workPhone: '123-456-7890',
        email:'elaine@google.com'

   };
}
    render() { 
        return (
            <div>
                <h1>Contact Name: {this.state.contactName}</h1>
                <h1>Mobile Number: {this.state.mobileNumber}</h1>
                <h1>Work Number: {this.state.workPhone}</h1>
                <h1>Email: {this.state.email}</h1>
            </div>
        );
    }
}
 
export default ContactCard;
