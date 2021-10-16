import './App.css';
import { RacesList } from './pages/components';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  return (

    
    <div className="App">
      <header className="App-header">
       
      </header>
      <Router>
        <Route exact path="/" component={RacesList}></Route>
        {/* <Route path="/racedetail/:id/" component={SingleRace}></Route> */}
      </Router>
    </div>
  );
}

export default App;
