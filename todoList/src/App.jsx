import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import './App.css'

function App() {


  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);


  const [loaded, setLoaded] = useState(false); // flag to track if tasks are loaded

  // Load tasks from localStorage on first render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setLoaded(true); // mark tasks as loaded
  }, []);

  // Save tasks only after loading is complete
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false

    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  }



  return (
    <>
      <div className="container">

        <div className="app">

          <div className="inputbox" style={{ borderRadius: tasks.length > 0 ? '10px 10px 0px 0px' : '10px' }}>

            <input type="text" id='input' placeholder='Task..' value={input} onChange={(e) => setInput(e.target.value)} />
            <img src="/plus.png" alt="Plus Icon" id='add' onClick={addTask} />
          </div>

          <div className="taskbox" style={{ padding: tasks.length > 0 ? '5px' : '0px', border: tasks.length > 0 ? '2px solid white' : '0px' }} >
            {tasks.map(task => {
              return (
                <div className="task" key={task.id}>
                  <div className="textbox">
                    <img
                      src={!task.completed ? "/empty.png" : "/check.png"}
                      alt="Plus Icon"
                      id="checkbtn"
                      onClick={() => toggleComplete(task.id)}
                    />
                    <p style={{ textDecoration: task.completed ? 'line-through' : '', color: task.completed ? 'grey' : '' }}>
                      {task.text}
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faDeleteLeft} id="delete" onClick={() => deleteTask(task.id)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
