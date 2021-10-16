import React, { useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RaceTitleWrap } from '../../../components';
import SingleRace from '../SingleRace';
import { connect  } from 'react-redux';
import { fetchRaces } from '../../../data/actions/races.actions';
import {fetchSingleRace} from '../../../data/actions/singleRace.actions';
import {fetchParticipiant} from '../../../data/actions/participiant.actions'


function RaceList({ races, fetchRaces, fetchParticipiant, participiant }) {
    // const racesFetchedList = races.map((singleRace) => (
    //     singleRace.name
    // ));
    useEffect(() => {
        fetchRaces();
        //fetchParticipiant(1)
        
        
    
    },[fetchRaces, fetchParticipiant])

//console.log(participiant)
    const racesFetchedList = races ? races.map(elem => (
        <li key={elem.id} >
            <Link to={`/racedetail/${elem.id}`}>{elem.name}</Link>
        </li>
    )) : <div>Lista pusta</div>

    
    return (
        <>
            <h1>Race betting App</h1>
            <RaceTitleWrap></RaceTitleWrap>
            {/* { races.map(elem => (
                <div key={elem.id}>{elem.name}</div>))
            }
         */}
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
    fetchParticipiant
}
  )(RaceList);