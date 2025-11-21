import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialTodo = [
    {
    id: 1,
    text: "Simple TODO app with redux"
    },
    
]


const todoSlice = createSlice({
    name: 'todo_redux',
    initialState: initialTodo,
    reducers: {
        addTodo:{
            reducer(state, action){
                state.push(action.payload);
            },

            prepare(text){
                return {
                    payload: {id: nanoid(), text}
                }
            }
        },
        removeTodo(state, action){
            return state.filter((todo)=> todo.id !== action.payload);
        }   
    }

})

export const { addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;