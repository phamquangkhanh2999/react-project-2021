import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      if (routes.length > 0) {
        result = routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            {route.main}
          </Route>
        ));
      }
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <Router>
      <div className='App'>
        <Menu />
        {/* het Nav bar  */}

        <div className='container'>
          <div className='row'>{showContentMenus(routes)}</div>
        </div>
        {/* het Table */}
      </div>
    </Router>
  );
}

export default App;
