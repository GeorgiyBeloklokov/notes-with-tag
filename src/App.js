import './App.css';
import {useState} from "react";
import ToDoForm from "./todoform";
import ToDo from "./todo";


function App() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const removeTaskOld = (todo,id,userInput) => {
        let val = todos
        val.splice(0,9,userInput)
        setTodos([...todos, todos] )
    }


    const handleToggle = (id) => {
        setTodos([...todos.map((todo) =>
            todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
        )])
    }

    const editTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([ newItem])
        }

    }






    return (
        <div className="App">
            <header>
                <h1>Список задач: {todos.length}</h1>
            </header>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                        editTask={editTask}
                        removeTaskOld={removeTaskOld}

                    />
                )
            })}
        </div>
    );
}

export default App;
