import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './components/routes';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* menu */}
        <Menu />
        {/* noi dung */}
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.main}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
