import './App.scss';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Wizard from './pages/Wizard/Wizard';


function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route path="/info-form" exact component={Wizard} />
           <Route path="/" exact component={HomePage} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
