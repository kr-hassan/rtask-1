import React, {useState} from "react";
import {nanoid} from 'nanoid';
import "./App.css";
import data from "./moc-data.json";

const initialState = {
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
}

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [addFormData, setAddFormData] = useState(initialState);

    const handleAddFormChange = (event) => {
        /*event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);*/

        setAddFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            ...addFormData,
            id: nanoid(),
        }
        const newContacts = [...contacts, newContact]
        setContacts(newContacts);

        setAddFormData(initialState)

    }

    return <div className="app-container">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>

            {contacts.map((contact, key) => (
                    <tr key={key}>
                        <td>{contact.fullName}</td>
                        <td>{contact.address}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.email}</td>
                    </tr>
                )
            )}

            </tbody>
        </table>
        <h2> Add a Customer</h2>
        <form action="" onSubmit={handleAddFormSubmit}>
            <input type="text" name="fullName" value={addFormData.fullName} required="required"
                   placeholder="Enter a name"
                   onChange={handleAddFormChange}/>
            <input type="text" name="address" value={addFormData.address} required="required"
                   placeholder="Enter address"
                   onChange={handleAddFormChange}/>
            <input type="text" name="phoneNumber" value={addFormData.phoneNumber} required="required"
                   placeholder="Enter Phone Number"
                   onChange={handleAddFormChange}/>
            <input type="email" name="email" value={addFormData.email} required="required" placeholder="Enter email"
                   onChange={handleAddFormChange}/>
            <button type={"submit"}>Add</button>
        </form>
    </div>;
}

export default App;
