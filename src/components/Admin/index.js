import './index.css';

const Admin = () => {

  /* const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeesSnapshot = await firestore.collection('users').get();
      const employeesList = employeesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployees(employeesList);
    };

    const fetchTasks = async () => {
      const tasksSnapshot = await firestore.collection('tasks').get();
      const tasksList = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksList);
    };

    fetchEmployees();
    fetchTasks();
  }, []);

  const handleAssignTask = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('tasks').add({
        name: taskName,
        description: taskDescription,
        assignedTo: assignedTo,
        assignedTime: new Date(),
      });
      alert('Task Assigned');
    } catch (error) {
      alert(error.message);
    }
  };

  const getTasksForEmployee = (employeeEmail) => {
    return tasks.filter(task => task.assignedTo === employeeEmail);
  }; */


  return (
    <div className='admin-container'>
      <h1 className='admin-heading'>Admin Panel</h1>
      <form className='admin-form'>
        {/*
        <input className='admin-task-title' type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" required />
        <input className='admin-task-desc' type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Task Description" required />
        <input className='admin-task-email' type="email" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} placeholder="Assign To (Email)" required />*/}
        <button type="submit" className='admin-btn'>Assign Task</button>
      </form>

      <h2 className='employee-task-head'>Employee Tasks</h2>
      <div className='emloyee-task'>
        {/*
        {employees.map(employee => (
          <div key={employee.id}>
            <h3>{employee.email}</h3>
            <ul>
              {getTasksForEmployee(employee.email).map(task => (
                <li key={task.id}>
                  <strong>{task.name}</strong>: {task.description}
                </li>
              ))}
            </ul>
          </div>
        ))}*/}
      </div>
    </div>
  );
};

export default Admin;
