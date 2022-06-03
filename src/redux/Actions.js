import {Add, Delete,Edit, Done, Filter, FILTERDONE} from './ActionTodo'

export const add = (message) => {
    return {
        type:Add,
        payload : {
            id : Math.random(),
            text : message,
            etat : false
        }
        
}
}

export const remove = id => {
    return {
        type: Delete,
        payload : id,
}
}

export const edit = (id,message) =>{
    return {
        type : Edit,
        payload : {message,id}
    }
}

export const done = (id)=>{
    return {
        type : Done,
        payload : id 
    }
}
export const filter=()=>{
    return {
        type:Filter
    }
}
export const filterDone=(bool)=>{
    return {
        type:FILTERDONE,
        payload:bool
    }
}
