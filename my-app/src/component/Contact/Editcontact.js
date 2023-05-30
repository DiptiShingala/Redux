import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {editcontact,updatecontact} from '../../action/contactaction'
import { useHistory } from 'react-router'
import { useParams } from 'react-router'

const Editcontact = () => {
    const {id}  = useParams()
    const contact = useSelector(state => state.detail.contacts)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name,setname] = useState("")
    const [phone,setphone] = useState("")
    const [email,setemail] = useState("")

useEffect(() => {
        if(contact!==null)
        {
            setname(contact.name)
            setphone(contact.phone)
            setemail(contact.email)
        }
       dispatch(editcontact(id)) 
     }, [contact])
     const onUpdateContact =(e) =>{
         e.preventDefault()
        const update_contact = Object.assign(contact, {name:name,phone:phone,email:email})
        dispatch(updatecontact(update_contact))
        history.push("/")
    }
     return (
        <div className = "card border-0 shadow">
            <div className = "card-header">Edit Contact</div>
            <div className ="card-body">
            <form onSubmit = {(e) => onUpdateContact(e)}>
                <div className ="form-group">
                    <input type = "text" 
                    className = "form-control"
                     placeholder="Enter Name"
                     value ={name}
                     onChange ={(e) => setname(e.target.value)}/>
                </div>
                <div className ="form-group">
                    <input type = "text" 
                    className = "form-control"
                     placeholder="Enter phone number"
                     value ={phone}
                     onChange ={(e) => setphone(e.target.value)}/>
                </div>
                <div className ="form-group">
                    <input type = "text" 
                    className = "form-control"
                     placeholder="Enter Email"
                     value ={email}
                     onChange ={(e) => setemail(e.target.value)}/>
                </div>
                <button className ="btn btn-primary" type = "submit">Update Contact</button>
            </form>


            </div>
        </div>
    )
}

export default Editcontact
