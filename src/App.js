import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import TasksList from './components/TasksList';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <AddTask />
        <TasksList />
        
      </Container>

    </div>
  );
}

export default App;
