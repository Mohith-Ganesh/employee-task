import React, { useState, useEffect } from 'react';
import './index.css'

const Dashboard = () => {

  //const [tasks, setTasks] = useState([]);
  const [timer, setTimer] = useState({});
  const [timeSpent, setTimeSpent] = useState({});

   // this method is to fetch the task from database
  /* useEffect(() => {
    const fetchTasks = async () => {
      .....
      setTasks(tasksList);
    };

    fetchTasks();
  }, []); */


  // temporary task to display
  const tasks = [{id:1, title: "Do Home Work", description: "Complete the home word in time"},
                 {id:2, title: "Play", description: "Go out and play"},
                 {id:3, title: "Read news paper", description: "daily read the arcticles in the news paper"},
                 {id:4, title: "Eat", description: "Eat the healthy food"},
                 {id:5, title: "Read news paper", description: "daily read the arcticles in the news paper"},
                 {id:6, title: "Read news paper", description: "daily read the arcticles in the news paper"},
                 {id:7, title: "Read news paper", description: "daily read the arcticles in the news paper"},
                 {id:8, title: "Read news paper", description: "daily read the arcticles in the news paper"},]

  const handleStart = (taskId) => {
    setTimer({ ...timer, [taskId]: new Date() });
  };

  const handleStop = (taskId) => {
    const endTime = new Date();
    const startTime = timer[taskId];
    const duration = Math.floor((endTime - startTime)/1000);
    setTimeSpent({ ...timeSpent, [taskId]: duration });
  };

  return (
    <div className='dashboard-container'>
      <h1 className='dashboard-heading'>Dashboard</h1>
      <h1 className='tasks'>Tasks To Accomplish</h1>
      <div className='task-container'>
        {tasks.map(eachTask => (
          <div className="task-card" key={eachTask.id}>
            <h2 className="task-title">{eachTask.title}</h2>
            <p className='task-description'>{eachTask.description}</p>
            <button className="start-btn" onClick={() => handleStart(eachTask.id)}>Start</button>
            <button className="stop-btn" onClick={() => handleStop(eachTask.id)}>Stop</button>
            {timeSpent[eachTask.id] && <p className='task-time'>Time Spent: {timeSpent[eachTask.id]} seconds</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;
