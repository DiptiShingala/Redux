import React from 'react'
import { useSelector } from 'react-redux'
import Contacts from './Contacts'
const Contact = () => {
    const contacts = useSelector((state) => state.detail.contacts)
    return (
        <div>
            <table className="table table-shadow">
  <thead>
    <tr>
      <th scope="col">
          <div className ="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className ="custom-control-label"></label>
          </div>
    </th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Action</th>
    </tr>
  </thead>
  <tbody>
          {contacts.map(contact =><Contacts contact = {contact}/> 
        )}
      </tbody>
</table>
</div>
    )
}

export default Contact
