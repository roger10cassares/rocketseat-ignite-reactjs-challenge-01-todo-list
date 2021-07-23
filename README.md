# Rocketseat Ignite Reactjs Challenge 01 Todo List

## Quick Start
```shell
# Download this repository
git clone https://github.com/roger10cassares/rocketseat-ignite-reactjs-challenge-01-todo-list.git

# Enter this repository
cd rocketseat-ignite-reactjs-challenge-01-todo-list

# Install the dependencies
yarn

# Run the testes
yarn test

# Run the development mode
yarn dev

# Run the production mode
yarn prod

```
Then, access to the localhost address to access the React Application:

[http://localhost:8080](http://localhost:8080)



## Rogério's Solving Explanation

### handleCreateNewTask()

In the HTML React DOM we have:

A `header` and a `main` section.

In the `header`, we shall write a new task name in the `input` element, then press the `button` element to store this value in the `newTaskTitle` state.

So when we click in the `submit button,` we call the function `handleCreateNewTask()`

Now, we have to create an task object, since the states tasks assumes a Array of Task type.

To store a new task in Tasks array, we should use `setTasks()` property from the `useState` Hook.

Using the *immutability* concept, we now set the new value for the `Tasks` array using the `spread operator ...` as  the first element, and we edit the second element of the array according this new data. Before, we have to create a `randomId` and initializes the `isComplete` key of `Tasks` object with `false` to mark  the task with an not completed  when it is created. We could not be able to create an empty task.

```ts
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
```



### handleToggleTaskCompletion(*id*: *number*)

To handle the Task complete we have to use the `map` method of the javascript to create a new array based on the state of task array of objects.

So, for the determined id, we should set the `isComplete` `key` of that object to the opposite `boolean` value.

Finally, we use the `setTasks` callback function from the `useState` Hook to return the array with the old tasks array of objects.

```ts
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
```



### handleRemoveTask(*id*: *number*)

To remove the desired task, we need to create a new array based on the tasks array of the objects, but `filtering` just the requested task with that `id`.

From that moment we should return this array for the new value of the `setTasks` callback function from the `useState` Hook 

```ts
  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    let remainedTasks = tasks.filter(removedTask => removedTask.id != id) 
    console.log(`The removed task id was: ${JSON.stringify(id)}`)
    setTasks(remainedTasks)
  }
```





## Official response from this Challenge

The React Controled Component are that one that we handle its value saving the event of the component to the element value without using the <form/> element.

```jsx
         <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
```



### handleCreateNewTask()

```ts
function handleCreateNewTask() {
    if (!newTaskTitle) return;
    
    const newTask = = {
        id: Math.random(),
        title: newTaskTitle,
        isComplete: false
	}
    
    // Use setTast in the callback form. Because when we use the old state, it can be unupdated because the React rendering is assyncronous. It can be late to render again and update the value. In some cases it should works better.
    setTasks(oldState => [...oldState, newTask])
    
 	// Here we can also reset the value of the newTaskTitle state.
    setNewTaskTitle('')
```



### handleRemoveTask(*id*: *number*)

```ts
  function handleRemoveTask(id: number) {
      // Filter all that do not have a determined id.
      // Pass for it task, then when task.id !== id
      const filteredTasks = tasks.filter(task => task.id !== id)
      
      setTasks(filteredTasks); 
  }
```



### handleToggleTaskCompletion(*id*: *number*)



```ts
  function handleToggleTaskCompletion(id: number) {
      // Map the tasks array, take the id specific, change it and set the new value with setTask() callback
      // For each mapped task (task ==>), we make the same verification we done in the return section.
      // If task.id is true, we return the all old values from that task and edit isComplete with the opposite boolean state.
      // If task.id is false, we retirn the exact task array.
      const newTasks = task.map(task => task.id === id ? {
          ...task,
          isComplete: !task.isCOmplete
      } : task);
      
      setTasks(newTasks);
  }
```

















