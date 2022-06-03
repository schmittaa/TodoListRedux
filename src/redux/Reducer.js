import { Add, Delete, Done, Edit, Filter, FILTERDONE } from "./ActionTodo";

const initialState ={
    todos : [
        {
          id: 1,
          text: "Read a book",
          etat: false
        },
        {
          id: 2,
          text: "Go for a walk",
          etat: false
        },
        {
          id: 3,
          text: "Learn something new",
          etat: false
        },
        {
          id: 4,
          text: "Meet your bestie",
          etat: false
        },
          {
          id: 5,
          text: "But some food",
          etat: false
        }
      ],
    FilterTodo :false,
    DoneTodo : false,
}
function Reducer(state=initialState, action) {
    switch(action.type){
        case Add : 
        return{ 
            ...state,todos:[...state.todos,action.payload]
        };

        case Edit : 
        return{ 
            ...state,
            todos: state.todos.map(todo=>todo.id === action.payload.id? {...todo, text:action.payload.message} : todo)
        };
        case Delete :
        return {
            ...state,
            todos : state.todos.filter(todo=> todo.id !== action.payload)
        }
        case Done : 
        return{
          ...state,
          todos :  state.todos.map(el=>el.id===action.payload ? {...el, etat : ! el.etat }: el)
        }
        case Filter : 
        return{
          ...state,
          FilterTodo:false
        }
        case FILTERDONE : 
        return{
          ...state,
          FilterTodo:true,DoneTodo:action.payload
        }
        default :
        return(state)
    }
}

export default Reducer;