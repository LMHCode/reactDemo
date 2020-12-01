import HOME from './page/home';
import BUBBLES from './page/bubbles';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HOME} />
        <Route path="/bubbles" component={BUBBLES} />
        {/* <Route exact component={Page404} /> */}
      </Switch>
    </div>
  );
}

export default App;
