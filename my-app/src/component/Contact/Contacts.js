import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deletecontact} from '../../action/contactaction'
const Contacts = ({contact}) => {
    const dispatch = useDispatch()
    const {name,phone,email,id} = contact
    return (
        <>
            <tr>
            <td>
            <div className ="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className ="custom-control-label"></label>
          </div>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className = "actions">
                <Link to = {`/contact/edit/${id}`}>
                    <span className ="material-icons mr-5">edit</span>
                </Link>
                <Link to="#">
                    <span className ="material-icons mr-5" onClick ={(e)=> dispatch(deletecontact(id))}>remove</span>
                </Link>
            </td>
          </tr>
        </>
    )
}
export default Contacts
