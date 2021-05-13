import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewHeader from './NewHeader';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className="App m-5">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={NewHeader} />
          <Route path="/addlist" exact component={TodoInput} />
          <Route path="/showlist" exact component={TodoList} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
