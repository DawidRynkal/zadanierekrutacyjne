import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RaceTitleWrap } from '../../../components';
import SingleRace from '../SingleRace';
import { connect  } from 'react-redux';
import { fetchRaces } from '../../../data/actions/races.actions';


function RaceList({
        fetchRaces, races, 
    })
     {

    const [filterState, setFilterState] = useState('');

    useEffect(() => {
        fetchRaces();

    },[fetchRaces])

    const racesFetchedList = races ? races.map(elem => (
        <li className="racesLielem" key={elem.id} >
            <Link className="linkToRace" to={`/racedetail/${elem.id}`}>{elem.name}</Link>
        </li>
    )) : <div>Lista pusta</div>

    const activeFilterHandler = () => {
        setFilterState(true);
    }

   
    const racesActiveList = races ? races.filter(race => race.active === true) : null;
    console.log(racesActiveList);
   
      
    
    return (
        <>
            <h1 className="mainAppTitle">Ireland Horse Racing</h1>
            <RaceTitleWrap></RaceTitleWrap>
            <Router>
                <div className="ulWrap">
                    <div className="filtersWrap">
                        <p id="active" onClick={activeFilterHandler} className="filterElem activeFilter">active</p>
                        <p id="disactive" className="filterElem">disactive</p>
                    </div>
                    <ul className="racesListWrap">
                        {racesFetchedList}
                    </ul>
                    <ul className="racesListWrap">
                        {/* {racesActiveList} */}
                    </ul>
                </div>
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