import HOME from './page/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HOME} />
        {/* <Route path="/food" component={Food} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/profile" component={Profile} />
        <Route exact component={Page404} /> */}
      </Switch>
    </div>
  );
}

export default App;
