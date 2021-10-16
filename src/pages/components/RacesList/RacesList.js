import React, { useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RaceTitleWrap } from '../../../components';
import SingleRace from '../SingleRace';
import { connect  } from 'react-redux';
import { fetchRaces } from '../../../data/actions/races.actions';


function RaceList({
        fetchRaces, races, 
    })
     {


    useEffect(() => {
        fetchRaces();

    },[fetchRaces])

    const racesFetchedList = races ? races.map(elem => (
        <li key={elem.id} >
            <Link to={`/racedetail/${elem.id}`}>{elem.name}</Link>
        </li>
    )) : <div>Lista pusta</div>

    
    return (
        <>
            <h1>Race betting App</h1>
            <RaceTitleWrap></RaceTitleWrap>
            <Router>
                <ul>
                    {racesFetchedList}
                </ul>
                <Switch>
                    <Route path="/racedetail/:id" component={SingleRace}></Route>
                </Switch>
            </Router>
            
        </>
       
    )
}
export default connect( state => {
    return {
      races: state.races.races,
      participiant: state.participiant.participiant,
    }
}, {
    fetchRaces,
}
  )(RaceList);