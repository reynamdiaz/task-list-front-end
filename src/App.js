import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
// import axios from 'axios';
import TaskList from './components/TaskList.js';
import './App.css';

// // maybe delete this? (receiving tasks from API) lines 9 - 20
// const TASKSLIST = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: false,
//   },
//   {
//     id: 3,
//     title: 'Walk the dog',
//     isComplete: false,
//   },
//   {
//     id: 4,
//     title: 'Pick up kiddos',
//     isComplete: false,
//   },
//   {
//     id: 5,
//     title: 'Get the mail',
//     isComplete: false,
//   },
// ];
// maybe delete this? (receiving tasks from API) lines 9 - 20
// const TASKSLIST = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

 // alternate version of Base URL
// const BASE_URL = 'https://task-list-api-c17.herokuapp.com';
const kBaseUrl = 'https://task-list-api-c17.herokuapp.com';

// convert from API function goes here:
// const convertFromApi = (apiTask) => {
//   const {id, title, description} = apiTask;
//   const newTask = {id, title, description};
//   // const {id, title, description, is_complete} = apiTask;
//   // const newTask = {id, title, description, isComplete: is_complete};
//   return newTask;
// };

const getAllTasksApi = () => {
  return axios
    .get(`${kBaseUrl}/tasks`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error.data);
    });
};

const App = () => {
  // const [tasks, setTasks] = useState(TASKSLIST);
  // default value for getting the list of tasks from API
  const [tasks, setTasks] = useState([]);
  console.log('tasklist:', tasks);

  // create a helper function above the useEffect to keep the useEffect small
  const getAllTasks = () => {
    getAllTasksApi()
    .then(tasks => {
      setTasks(tasks);
      console.log(tasks);
    });
  };

  // then have to modify the useEffect
  useEffect(() => {
    getAllTasks();
  }, []);

  // old useEffect
  // useEffect(() => {
  //   getAllTasksApi()
  //   .then(tasks => {
  //     // setTasks(tasks);
  //     console.log(tasks);
  //   });
  // }, []);

  // update completeTask function (toggleCompleteTask in README)
  // to update task isComplete in the DB
  // figure out how

  const completeTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        console.log('id:', id, 'task', task);
        if (task.id === id) {
          console.log('isComplete', task.isComplete);
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  };

  // update tasks, leverage the state
  const deleteTask = (id) => {
    console.log('in delete!');
    console.log('deletable task');
    // fix functionality! wrap next three lines in
    let updatedTasks = tasks.filter((task) => task.id !== id);
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasks}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
