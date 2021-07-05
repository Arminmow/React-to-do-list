import { useState } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";



function App() {
    const  [ShowAdd , SetShowAdd] = useState(false)
    const [tasks , setTasks] = useState(
        [
            {
                id: 1,
                text: 'React',
                day: 'everyday',
                reminder: true,
            },
            {
                id: 2,
                text: 'Play Games',
                day: 'everyday',
                reminder: true,
            },
            {
                id: 3,
                text: 'Sleep',
                day: 'everyday',
                reminder: false,
            }
        ]
    )

    function ToggleAdd (){
        SetShowAdd (!ShowAdd)


    }

    // Add Task
    function addTask (task){
        const id = Math.floor(Math.random() * 1000) +1;
        const newTask = {id , ...task};
        setTasks([...tasks, newTask]);

    }

    // DELETE TASK
    function deleteTask (id){
        function Filter (task){
            if (task.id !== id){
                return task
            }
        }
        setTasks(tasks.filter(Filter))

        // Or i can do this:
        //setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    function toggleReminder (id){
        function reminder (task){
            if ( task.id === id){
                task.reminder = !task.reminder
                return task
            }
            else {
                return task
            }
        }
        setTasks(tasks.map(reminder))

    }

  return (
      <Router>
          <div className="container">
              <Header onAdd={ ToggleAdd } ShowAddTask={ShowAdd} title='Task Tracker'  />

              <Route path='/' exact render={() => (
                  <>
                      {ShowAdd && <AddTask onAdd={addTask}/>}
                      <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/>
                  </>
              )} />
              <Route path='/about' component={About} />
              <Footer />
          </div>
      </Router>
  );
}

export default App;
