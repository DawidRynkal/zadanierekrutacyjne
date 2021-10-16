import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RaceTitleWrap } from '../../../components';
import SingleRace from '../SingleRace';
import { connect  } from 'react-redux';
import { fetchRaces } from '../../../data/actions/races.actions';


const RaceList = ({ fetchRaces, races }) => {

    const [filterState, setFilterState] = useState('');

    useEffect(() => {
        fetchRaces();

    },[fetchRaces])


    const activeFilterHandler = (id) => {
        setFilterState(id);
        
    }
   
    const racesActiveList = races ? races.filter(race => race.active === true) : null;
    const racesDisactiveList = races ? races.filter(race => race.active === false) : null;
    console.log(races);
   
      
    
    return (
        <>
            <h1 className="mainAppTitle">Ireland Horse Racing</h1>
            <div className="ulWrap">
                <h2 className="subTitle">Filter Races :</h2>
                <div className="filtersWrap">
                    <p 
                    id="active" 
                    onClick={(e) => activeFilterHandler(e.target.id)}
                    className={filterState === "active" ? "filterElem activeFilter" : "filterElem"}>active</p>
                    <p 
                    id="disactive" 
                    onClick={(e) => activeFilterHandler(e.target.id)}
                    className={filterState === "disactive" ? "filterElem activeFilter" : "filterElem"}>disactive</p>
                    <p 
                    id="all" 
                    onClick={(e) => activeFilterHandler(e.target.id)}
                    className={filterState === "all" ? "filterElem activeFilter" : "filterElem"}>all</p>
                </div>
                { filterState === "disactive" ?
                ( <ul className="racesListWrap">
                {racesDisactiveList.length < 1 ? (
                    <div>Brak danych</div>
                ) : (
                    racesDisactiveList.map((elem) => (
                    <li className="racesLielem" key={elem.id}>
                        <Link className="linkToRace" to={`/racedetail/${elem.id}`}>{elem.name}</Link>
                        <p>{elem.active ? "active" : "disactive"}</p>
                    </li>
                    ))
                )}
                </ul>) : filterState === "active" ?
               ( <ul className="racesListWrap">
                {racesActiveList.length < 1 ? (
                    <div>Brak danych</div>
                ) : (
                    racesActiveList.map((elem) => (
                    <li className="racesLielem" key={elem.id}>
                        <Link className="linkToRace" to={`/racedetail/${elem.id}`}>{elem.name}</Link>
                        <p>{elem.active ? "active" : "disactive"}</p>
                    </li>
                    ))
                )}
                </ul>) : 
                (<ul className="racesListWrap">
                {races.length < 1 ? (
                    <div>Brak danych</div>
                ) : (
                    races.map((elem) => (
                    <li className="racesLielem" key={elem.id}>
                        <Link className="linkToRace" to={`/racedetail/${elem.id}`}>{elem.name}</Link>
                        <p>{elem.active ? "active" : "disactive"}</p>
                    </li>
                    ))
                )}
            </ul>)
                }
            </div>
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


  