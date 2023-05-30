import {CREATE_CONTACT} from '../constant/types'
import {GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from '../constant/types'

export const addcontact = (contact) =>({
        type: CREATE_CONTACT,
        payload:contact,
    })
export const editcontact = (id) => ({
    type: GET_CONTACT,
    payload : id,
})
export const updatecontact = (contact) => ({
    type: UPDATE_CONTACT,
    payload : contact,
})
export const deletecontact = (id)=>({
    type: DELETE_CONTACT,
    payload : id,
})

