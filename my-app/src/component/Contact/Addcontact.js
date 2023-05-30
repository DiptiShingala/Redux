import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addcontact} from '../../action/contactaction'
import { useHistory } from 'react-router'
const Addcontact = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name,setname] = useState("")
    const [phone,setphone] = useState("")
    const [email,setemail] = useState("")

    const createcontact=(e)=>{
        e.preventDefault()
        const new_name = {
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addcontact(new_name))
        history.push("/")
    }

    return (
        <div className = "card border-0 shadow">
            <div className = "card-header">Add Contact</div>
            <div className ="card-body">
            <form onSubmit = {(e) => createcontact(e)}>
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
                <button className ="btn btn-primary" type = "submit">Create Contact</button>
            </form>


            </div>
        </div>
    )
}

export default Addcontact
