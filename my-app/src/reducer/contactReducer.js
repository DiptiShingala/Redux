import { CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT} from '../constant/types'

const initialState = {
    contacts: [],
  
};
export const contactReducer = (state = initialState, action)=>{
 switch(action.type) {
     case CREATE_CONTACT :
         return{
             contacts:[action.payload,...state.contacts]
         }
         case GET_CONTACT:
             let arr = state.contacts.filter((contact)=>contact.id==action.payload)
             arr = arr.values()
             for(let val of arr){
                 arr = val
             }
             return{
                ...state,
                contact:arr
             }
             case UPDATE_CONTACT:
               return{
                 ...state,
                 contacts:state.contacts.map(contact => contact.id === action.payload.id? action.payload:contact)
               }
               case DELETE_CONTACT:
                 return{
                   ...state,
                   contacts:state.contacts.filter(contact => contact.id!==action.payload)
                 }
      default:
     return state;
 }
}