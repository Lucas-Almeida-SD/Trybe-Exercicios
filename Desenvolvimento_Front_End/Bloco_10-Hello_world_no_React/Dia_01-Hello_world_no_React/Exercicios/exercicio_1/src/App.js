import './App.css';

function App() {
  const array = ['Aprender React', 'Estudar React', 'Praticar React', 'Desenvolver em React']
  const Task = (value) => {
    return (
      <li className='task-item'>{value}</li>
    );
  }
  const tasksArray = array.map((element) => Task(element));
  console.log(tasksArray);
  return tasksArray;
}

export default App;
