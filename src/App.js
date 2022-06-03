import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import './App.css'
import AddTodo from './component/AddTodo'
import Filter from './component/Filter';
import ListTodo from './component/ListTodo'


function App() {
   return (
    <div>
        <AddTodo/>
        <Filter />
        <ListTodo />
    </div>
  );
}

export default App;
