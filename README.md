In the HTML React DOM we have:

A header and a main section.

In header, we shall write a new task name in the input elementm then press the button element to store this value in a state.

THe input value has a placeholder "Adicionar novo todo".

When we fill this input field, the variable 'newTaskTitle' assumes this value.
So when we click in the submit button, we call the function handleCreateNewTask()

Now, we have to create an task object, since the states tasks assumes a Array of Task type.

To store a new task in Tasks array, we should use setTasks property from the useState Hook.

