import './App.css';
import {Switch,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import MainComp from './components/MainComp';
import Later from './components/Later';
function App() {
  return (<>
  <Sidebar/>
  <Switch>
    <Route exact path="/"> <MainComp/> </Route>
    <Route path="/services"><Later/></Route>
  </Switch>
  </>
  );
}

export default App;
