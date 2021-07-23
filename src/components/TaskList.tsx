import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    if (newTaskTitle != '') {
      const randomId = Math.floor(Math.random()*10000); // Refactored after the Official Response
      setTasks([...tasks,{
        id: randomId,
        title: newTaskTitle,
        isComplete: false
      }])
      console.log(`The add task was: ${JSON.stringify(newTaskTitle)}`)
      setNewTaskTitle('') // Refactored after the Official Response
    } else {
      // window.alert(`You cannot add an empty task!`)
      console.log('You cannot add an empty task!')
    }
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    tasks.map(task => {
      if (task.id == id){
        task.isComplete = !task.isComplete
        console.log(`The toggled task was: ${JSON.stringify(task.title)}`)
        setTasks([...tasks])
      }
    })
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    let remainedTasks = tasks.filter(removedTask => removedTask.id != id) 
    console.log(`The removed task id was: ${JSON.stringify(id)}`)
    setTasks(remainedTasks)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}